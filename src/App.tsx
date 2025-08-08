import { ChatForm } from "./components/ChatForm";
import { ChatHeader } from "./components/ChatHeader";
import { ChatMessage } from "./components/ChatMessage";
import chatbot from "/assets/chatbot.png";
import "./App.css";
import { useEffect, useRef, useState } from "react";

const App = () => {
  const [chathistory, setChatHistory] = useState<ChatMessage[]>([]);
  const chatRef = useRef<HTMLDivElement>(null);

  const generateBotResponse = async (history: any[]) => {
    const upadateChatHistory = (botReply: string) => {
      setChatHistory((prevHistory) => [
        ...prevHistory.filter(
          (msg) => !(msg.role === "bot" && msg.content === "Thinking...")
        ),
        { role: "bot", content: botReply },
      ]);
    };

    // Format chat history for API response
    const formatedHistory = history.map(({ role, content }) => ({
      role: role === "bot" ? "model" : "user",
      parts: [{ text: content }],
    }));

    // Send a POST request to the API endpoint
    const requestOptions: RequestInit = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents: formatedHistory }),
    };

    // Fetch the bot response from the API
    try {
      const response = await fetch(
        import.meta.env.VITE_API_URL,
        requestOptions
      );
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Failed to fetch response");
      }
      console.log(data);

      const botReply = data.candidates?.[0]?.content?.parts?.[0]?.text
        ?.replace(/\*/g, "")
        .trim();

      upadateChatHistory(botReply);
    } catch (error) {
      console.log(error);
    }
  };

  // Scroll to the bottom of the chat
  useEffect(() => {
    chatRef.current?.scrollTo({
      top: chatRef.current.scrollHeight,
      behavior: "smooth",
    });
  });

  return (
    <main className="chatbot_main">
      <ChatHeader />
      <section className="chatbot_body" ref={chatRef}>
        <div className="chatbot_message">
          <div className="chatbot_icon-container">
            <img src={chatbot} alt="Chatbot Icon" className="chatbot_icon" />
          </div>
          <p className="message_text">
            Hello there 👋 <br />I am YumGenie, your AI-powered chatbot!
          </p>
        </div>
        {chathistory.map((message, index) => (
          <ChatMessage message={message} key={index} />
        ))}
      </section>
      <footer className="chatbot_footer">
        <ChatForm
          setChatHistory={setChatHistory}
          generateBotResponse={generateBotResponse}
          chathistory={chathistory}
        />
      </footer>
    </main>
  );
};

export default App;

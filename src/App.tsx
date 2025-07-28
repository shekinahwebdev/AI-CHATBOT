import { ChatFooter } from "./components/ChatFooter";
import { ChatHeader } from "./components/ChatHeader";
import { ChatMessage } from "./components/ChatMessage";
import chatbot from "/assets/chatbot.png";
import "./App.css";

const App = () => {
  return (
    <main className="chatbot_main">
      <ChatHeader />
      <section className="chatbot_body">
        <div className="chatbot_message">
          <div className="chatbot_icon-container">
            <img src={chatbot} alt="Chatbot Icon" className="chatbot_icon" />
          </div>
          <p className="message_text">
            Hello there 👋 <br />I am YumGenie, your AI-powered chatbot!
          </p>
        </div>
        <ChatMessage />
      </section>
      <footer className="chatbot_footer">
        <ChatFooter />
      </footer>
    </main>
  );
};

export default App;

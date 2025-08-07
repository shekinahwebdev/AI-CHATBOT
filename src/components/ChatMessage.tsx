import chatbot from "/assets/chatbot.png";

type ChatMessage = {
  role: "user" | "bot";
  content: string;
};

interface ChatMessageProps {
  message: ChatMessage;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  if (message.role === "bot") {
    return (
      <div className="chatbot_message">
        <div className="chatbot_icon-container">
          <img src={chatbot} alt="Chatbot Icon" className="chatbot_icon" />
        </div>
        <p className="message_text">{message.content}</p>
      </div>
    );
  }
  return (
    <div className="user_message">
      <p className="message_text">{message.content}</p>
    </div>
  );
};

import chatbot from "/assets/chatbot.png";

type ChatMessage = {
  role: "user" | "bot";
  content: string;
};

interface ChatMessageProps {
  message: ChatMessage;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  return (
    <div className={`${message.role === "bot" ? "bot" : "user"}_message`}>
      {message.role === "bot" && (
        <div className="chatbot_message">
          <div className="chatbot_icon-container">
            <img src={chatbot} alt="Chatbot Icon" className="chatbot_icon" />
          </div>
          <p className="message_text">{message.content}</p>
        </div>
      )}
      <p className="message_text">{message.content}</p>
    </div>
  );
};

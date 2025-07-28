import chatbot from "/assets/chatbot-3.png";

export const ChatHeader = () => {
  return (
    <div className="chatbot_header-icon">
      <img src={chatbot} alt="Chatbot Icon" className="chatbot_icon" />
      <h1 className="chatbot_title">AI Chatbot</h1>
    </div>
  );
};

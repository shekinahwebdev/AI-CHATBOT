import chatbot from "/assets/chatbot-3.png";
import arrowDown from "/assets/caret-down.png";
export const ChatHeader = () => {
  return (
    <div className="chatbot_header">
      <div className="chatbot_header_line">
        <div className="chatbot_icon">
          <img src={chatbot} alt="Chatbot Icon" className="chatbot_icon" />
        </div>
        <h1 className="chatbot_title">YumGenie Chatbot</h1>
      </div>

      <button className="chatbot_button">
        <img src={arrowDown} alt="Arrow Down" className="chatbot_arrow" />
      </button>
    </div>
  );
};

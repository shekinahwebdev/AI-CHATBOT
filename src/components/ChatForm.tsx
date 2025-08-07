import { useState } from "react";
import submitIcon from "/assets/top.png";

export const ChatForm = () => {
  const [message, setMessage] = useState("");
  return (
    <form className="chatbot_form">
      <input
        type="text"
        className="chatbot_input"
        placeholder="Message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      {message.trim() && (
        <button className="chatbot_form_button" type="submit">
          <img src={submitIcon} alt="Submit" className="chatbot_submit_icon" />
        </button>
      )}
    </form>
  );
};

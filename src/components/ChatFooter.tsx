import React from "react";

export const ChatFooter = () => {
  return (
    <form className="chatbot_form">
      <input
        type="text"
        className="chatbot_input"
        placeholder="Message..."
        required
      />
    </form>
  );
};

import submitIcon from "/assets/top.png";

export const ChatFooter = () => {
  return (
    <form className="chatbot_form">
      <input
        type="text"
        className="chatbot_input"
        placeholder="Message..."
        required
      />
      <button className="chatbot_form_button" type="submit">
        <img src={submitIcon} alt="Submit" className="chatbot_submit_icon" />
      </button>
    </form>
  );
};

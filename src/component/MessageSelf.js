import React from "react";

const MessageSelf = ({ props }) => {
  return (
    <div
      className="self-message-container"
      style={{ display: "flex", justifyContent: "flex-end" }}
    >
      <div
        className="message-box"
        style={{
          backgroundColor: "blue",
          marginRight: "10px",
          borderRadius: "10px",
        }}
      >
        <p>{props.lastMessage}</p>
        <p className="timeStamp">10:00 pm</p>
      </div>
    </div>
  );
};

export default MessageSelf;

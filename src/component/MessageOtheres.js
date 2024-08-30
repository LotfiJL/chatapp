import React from "react";

const MessageOtheres = ({ props }) => {
  console.log("props are ", props);
  return (
    <div
      className="other-message-container"
      style={{
        padding: "10px",
        display: "flex",
        justifyContent: "flex-start",
      }}
    >
      <div
        className="conversation-container"
        style={{
          height: "110%",
          backgroundColor: "yellow",
        }}
      >
        <p className="conversation-icon">{props.name[0]}</p>
        <div className="other-text-container">
          <p className="conversation-title">{props.name}</p>
          <p className="conversation-lastMessage ">{props.lastMessage}</p>
          <p
            className="con-timeStamp"
            style={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            {props.timeStamp}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MessageOtheres;

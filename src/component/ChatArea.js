import React from "react";

import "./componentStyle.css";
function ChatArea({ props }) {
  return (
    <div className="chatArea-container">
      <div className="chatArea-header">
        chatArea-header
        <p className="conversation-icon">{props.name[0]}</p>
        <p className="conversation-title">{props.name}</p>
        <p className="conversation-lastMessage ">{props.lastMessage}</p>
        <p className="conversation-timeStamp">{props.timeStamp}</p>
      </div>
      <div className="Messages-body">chatArea-body</div>
      <div className="chatArea-textArea">chatArea-footer</div>
    </div>
  );
}

export default ChatArea;

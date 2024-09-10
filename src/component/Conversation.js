import React from "react";
import { useNavigate } from "react-router-dom";

function Conversation({ props }) {
  const navigate = useNavigate();
  return (
    <div className="conversation-container2" onClick={() => navigate("chat")}>
      <div className="conversation-container">
        <p className="conversation-icon">{props.name[0]}</p>
        <p className="conversation-title">{props.name}</p>
        <p className="conversation-lastMessage ">{props.lastMessage}</p>
        <p className="conversation-timeStamp">{props.timeStamp}</p>
      </div>
    </div>
  );
}

export default Conversation;

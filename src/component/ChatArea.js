import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send"; // Corrected import
import "./componentStyle.css";
import { Icon } from "@mui/material";
import MessageOtheres from "./MessageOtheres";
import MessageSelf from "./MessageSelf";
function ChatArea() {
  const [Messages, setMessages] = useState({
    name: "Lotfi",
    lastMessage: "this is the last message #1",
    timeStamp: "today",
  });

  const [conversations, setConversations] = useState([
    {
      name: "Lotfi",
      lastMessage: "this is the last message #1",
      timeStamp: "today",
    },

    {
      name: "Lotfi",
      lastMessage: "this is the last message #1",
      timeStamp: "today",
    },

    {
      name: "Lotfi",
      lastMessage: "this is the last message #1",
      timeStamp: "today",
    },
  ]);

  const props = conversations;

  return (
    <div className="chatArea-container">
      <div className="chatArea-header">
        <p className="conversation-icon">{props[0].name[0]}</p>
        <div className="header-text">
          <p className="conversation-title">{props.name}</p>
          <p className="conversation-timeStamp">{props.timeStamp}</p>
        </div>
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </div>
      <div className="Messages-body">
        <MessageOtheres props={Messages} />
        <MessageSelf props={Messages} />
        <MessageOtheres props={Messages} />
        <MessageSelf props={Messages} />
        <MessageOtheres props={Messages} />
        <MessageSelf props={Messages} />
      </div>
      <div className="chatArea-textArea">
        <input
          placeholder="type in your message"
          type="text"
          className="search-box"
        />

        <IconButton>
          <SendIcon style={{ color: "red" }} /> {/* Apply red color here */}
        </IconButton>
      </div>
    </div>
  );
}

export default ChatArea;

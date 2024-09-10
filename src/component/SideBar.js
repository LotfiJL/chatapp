import React, { useState } from "react";
import "./componentStyle.css";
import { IconButton } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import NightlightIcon from "@mui/icons-material/Nightlight";

import SearchIcon from "@mui/icons-material/Search";
import Conversation from "./Conversation.js";
import { useNavigate } from "react-router-dom";

import LightModeIcon from "@mui/icons-material/LightMode";
import darkModeIcon from "@mui/icons-material/DarkMode";
import { light } from "@mui/material/styles/createPalette.js";

function SideBar() {
  const navigate = useNavigate();

  const [LightTheme, setLightTheme] = useState(true);
  const [conversations, setConversations] = useState([
    {
      name: "Lotfi",
      lastMessage: "this is the last message #1",
      timeStamp: "today",
    },

    {
      name: "jelo",
      lastMessage: "this is the last message #2",
      timeStamp: "today",
    },
    {
      name: "Tifo",
      lastMessage: "this is the last message #3",
      timeStamp: "today",
    },
  ]);

  return (
    <div className="sb-container">
      <div className={`sb-header ${LightTheme ? "" : "dark"}`}>
        <div>
          <IconButton>
            <AccountCircleIcon />
          </IconButton>
        </div>

        <div>
          <IconButton onClick={() => navigate("online")}>
            <PersonAddIcon />
          </IconButton>

          <IconButton onClick={() => navigate("groups")}>
            <GroupAddIcon />
          </IconButton>

          <IconButton onClick={() => navigate("creategroups")}>
            <AddCircleIcon />
          </IconButton>

          <IconButton
            onClick={() =>
              setLightTheme((prevValue) => {
                return !prevValue;
              })
            }
          >
            {!LightTheme && <LightModeIcon />}

            {LightTheme && <NightlightIcon />}

            {console.log("prev is ", LightTheme)}
          </IconButton>
        </div>
      </div>

      <div className="sb-search">
        <SearchIcon />
        <input type="text" placeholder="search" className="search-input" />
      </div>

      <div className="sb-conversation">
        {conversations.map((conversation) => {
          return <Conversation props={conversation} key={conversation.name} />;
        })}
      </div>
    </div>
  );
}

export default SideBar;

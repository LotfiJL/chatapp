import React from "react";
import "./componentStyle.css";
import { IconButton } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import NightlightIcon from "@mui/icons-material/Nightlight";

import SearchIcon from "@mui/icons-material/Search";

function SideBar() {
  return (
    <div className="sb-container">
      <div className="sb-header">
        <div>
          <IconButton>
            <AccountCircleIcon />
          </IconButton>
        </div>
        <div>
          <IconButton>
            <PersonAddIcon />
          </IconButton>

          <IconButton>
            <GroupAddIcon />
          </IconButton>

          <IconButton>
            <AddCircleIcon />
          </IconButton>

          <IconButton>
            <NightlightIcon />
          </IconButton>
        </div>
      </div>
      <div className="sb-search">
        <SearchIcon />
        <input type="text" placeholder="search" className="search-input" />
      </div>
      <div className="sb-conversation"> conversation</div>
    </div>
  );
}

export default SideBar;

import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";

const Users_Groups = () => {
  return (
    <div className="list_container">
      <div className="ug-header">
        <img
          src={`${process.env.PUBLIC_URL}/assets/Chatapp.png`}
          alt="Logo"
          style={{ width: "2rem", height: "2rem" }}
        />
        <p className="ug-title"> online users</p>
      </div>
      <div className="sb-search">
        <IconButton>
          <SearchIcon />
        </IconButton>
        <input type="text" placeholder="search" className="search-input" />
      </div>
      <div className="ug-list">
        <div className="list-item">
          <p className="conversation-icon">L</p>
          <p className="conversation-title">Test users</p>
        </div>

        <div className="list-item">
          <p className="conversation-icon">L</p>
          <p className="conversation-title">Test users</p>
        </div>

        <div className="list-item">
          <p className="conversation-icon">L</p>
          <p className="conversation-title">Test users</p>
        </div>

        <div className="list-item">
          <p className="conversation-icon">L</p>
          <p className="conversation-title">Test users</p>
        </div>

        <div className="list-item">
          <p className="conversation-icon">L</p>
          <p className="conversation-title">Test users</p>
        </div>

        <div className="list-item">
          <p className="conversation-icon">L</p>
          <p className="conversation-title">Test users</p>
        </div>

        <div className="list-item">
          <p className="conversation-icon">L</p>
          <p className="conversation-title">Test users</p>
        </div>

        <div className="list-item">
          <p className="conversation-icon">L</p>
          <p className="conversation-title">Test users</p>
        </div>
      </div>
    </div>
  );
};

export default Users_Groups;

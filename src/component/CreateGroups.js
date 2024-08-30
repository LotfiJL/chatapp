import { IconButton } from "@mui/material";
import React from "react";
import DoneOutlineRoundedIcon from "@mui/icons-material/DoneOutlineRounded";
const CreateGroups = () => {
  return (
    <div className="create-groups-container">
      <input placeholder="Enter the group name" className="search-box" />

      <IconButton>
        <DoneOutlineRoundedIcon />
      </IconButton>
    </div>
  );
};

export default CreateGroups;

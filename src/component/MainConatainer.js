import React from "react";
import "./componentStyle.css";
import SideBar from "./SideBar";
import WorkArea from "./WorkArea";
import ChatArea from "./ChatArea";
function MainConatainer() {
  return (
    <div className="MainContainer">
      <SideBar />
      <ChatArea />
    </div>
  );
}

export default MainConatainer;

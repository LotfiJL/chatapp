import React from "react";
import "./componentStyle.css";
import SideBar from "./SideBar";
import WorkArea from "./WorkArea";
function MainConatainer() {
  return (
    <div className="MainContainer">
      <SideBar />
      <WorkArea />
    </div>
  );
}

export default MainConatainer;

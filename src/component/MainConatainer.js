import React, { useState } from "react";
import "./componentStyle.css";
import SideBar from "./SideBar";
import WorkArea from "./WorkArea";
import ChatArea from "./ChatArea";
import Welcome from "./Welcome";
import CreateGroups from "./CreateGroups";
import UsersGroups from "./UsersGroups";
import { Outlet } from "react-router-dom";
function MainConatainer() {
  const [conversations, setConversations] = useState([
    {
      name: "Lotfi",
      lastMessage: "this is the last message #1",
      timeStamp: "today",
    },
  ]);

  return (
    <div className="MainContainer">
      <SideBar />
      <Outlet />
      {/* <UsersGroups /> */}
      {/* <Welcome /> */}
      {/* <CreateGroups /> */}
      {/* {conversations.map((conversation) => {
        return <ChatArea props={conversation} key={conversation.name} />;
      })} */}
    </div>
  );
}

export default MainConatainer;

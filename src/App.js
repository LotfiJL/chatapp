import "./App.css";

import MainConatainer from "./component/MainConatainer";
import Login from "./component/Login";
import { Route, Routes } from "react-router-dom";
import Welcome from "./component/Welcome";
import ChatArea from "./component/ChatArea";
import UsersGroups from "./component/UsersGroups";
import CreateGroups from "./component/CreateGroups";
import OnlineUsers from "./component/OlineUsers";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="app" element={<MainConatainer />}>
          <Route path="welcome" element={<Welcome />}></Route>
          <Route path="chat" element={<ChatArea />}></Route>
          <Route path="groups" element={<UsersGroups />}></Route>
          <Route path="online" element={<OnlineUsers />}></Route>
          <Route path="creategroups" element={<CreateGroups />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

import "./App.css";

import MainConatainer from "./component/MainConatainer";
import Login from "./component/Login";
import { Route, Routes } from "react-router-dom";
import Welcome from "./component/Welcome";
import ChatArea from "./component/ChatArea";
import UsersGroups from "./component/UsersGroups";
import CreateGroups from "./component/CreateGroups";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="app" element={<MainConatainer />}>
          <Route path="welcome" element={<Welcome />}></Route>
          <Route path="chat" element={<ChatArea />}></Route>
          <Route path="users" element={<UsersGroups />}></Route>
          <Route path="groups" element={<groups />}></Route>
          <Route path="creategroups" element={<CreateGroups />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

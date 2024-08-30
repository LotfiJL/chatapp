import React from "react";

const Welcome = () => {
  return (
    <div className="welcome-container">
      <img
        src={`${process.env.PUBLIC_URL}/assets/Chatapp.jpeg`}
        alt="Logo"
        className="welcome-img"
      />
      <p>text your online friends in the chat rooms, have a good experience</p>
    </div>
  );
};

export default Welcome;

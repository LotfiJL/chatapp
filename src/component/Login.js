import { Button, TextField } from "@mui/material";
import React from "react";

const Login = () => {
  return (
    <div className="login-container">
      <div className="image-container">
        <img
          src={`${process.env.PUBLIC_URL}/assets/Chatapp.png`}
          alt="Logo"
          className="welcome-sidebar-img"
        />
      </div>
      <div className="login-box">
        <p>Login to your account</p>
        <TextField
          id="standard-basic"
          label="Enter your email"
          variant="outlined"
        />
        <TextField
          id="standard-basic"
          label="Password"
          autoComplete="current-password"
        />
        <Button variant="outlined">Login</Button>
      </div>
    </div>
  );
};

export default Login;

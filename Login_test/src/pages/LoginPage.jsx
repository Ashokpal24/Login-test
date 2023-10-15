import React, { useState } from "react";
import axios from "axios";

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const mainURL =
    "https://bookish-space-enigma-qgpxggv4vxg24wwj-3001.app.github.dev";
  const handleLogin = async () => {
    try {
      await axios.post(`${mainURL}/login`, { username, password });
      setMessage("Login successful!");
      onLogin();
    } catch (error) {
      console.error(error);
      setMessage("Login failed.");
    }
  };
  return (
    <div>
      <h2>Login Page</h2>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
      <div>{message}</div>
    </div>
  );
};

export default LoginPage;

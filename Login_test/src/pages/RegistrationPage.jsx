import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const RegistrationPage = () => {
  const navigateTo = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const mainURL =
    "https://bookish-space-enigma-qgpxggv4vxg24wwj-3001.app.github.dev";

  const handleRegister = async () => {
    try {
      await axios.post(`${mainURL}/register`, {
        username,
        password,
      });
      setRegistrationSuccess(true);
      navigateTo("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Registration Page</h2>
      {registrationSuccess ? (
        <p>Registration successful! Redirecting to login...</p>
      ) : (
        <div>
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
          <button onClick={handleRegister}>Register</button>
        </div>
      )}
      {/* <button onClick={handleLogin}>Login</button> */}
    </div>
  );
};
export default RegistrationPage;

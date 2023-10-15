import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  useNavigate,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigateTo = useNavigate();

  const handleLogin = () => {
    const newBool = true;
    setIsAuthenticated(newBool);
    console.log(isAuthenticated);
    navigateTo("/hero");
  };

  const handleLogout = () => {
    const newBool = false;
    setIsAuthenticated(newBool);
  };
  return (
    <div className="App">
      <h1>User Authentication App</h1>
      <nav>
        {isAuthenticated ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/registration">Registration</Link>
            </li>
          </ul>
        )}
      </nav>

      <Routes>
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route
          path="/hero"
          element={<PrivateRoute isAuth={isAuthenticated} />}
        />
      </Routes>
    </div>
  );
}

export default App;

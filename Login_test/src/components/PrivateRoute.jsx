import React from "react";
import { Navigate } from "react-router-dom";
import HeroPage from "../pages/HeroPage";

const PrivateRoute = ({ isAuth }) => {
  console.log(isAuth);
  return isAuth ? <HeroPage /> : <Navigate to="/login" />;
};

export default PrivateRoute;

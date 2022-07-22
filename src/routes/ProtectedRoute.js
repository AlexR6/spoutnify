import React from "react";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  if (!window.localStorage.getItem("access_token")) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

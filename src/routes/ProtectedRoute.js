import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const user = useSelector((state) => state.user);
  if (!user.isConnected) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import NavBarTop from "../components/NavBarTop";
import NavBarLeft from "../components/NavBarLeft";
import Home from "../views/Home";
import Search from "../views/Search";
import Login from "../views/Login";
import { useSelector } from "react-redux";
import { ProtectedRoute } from "./ProtectedRoute";

const Routing = () => {
  const user = useSelector((state) => state.user);
  return (
    <Router>
      {user.isConnected ? (
        <div className="container-main">
          <div className="container-left">
            <NavBarLeft />
          </div>
          <div className="container-right">
            <NavBarTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                exact
                path="/search"
                element={
                  <ProtectedRoute>
                    <Search />
                  </ProtectedRoute>
                }
              />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </div>
      ) : (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      )}
    </Router>
  );
};

export default Routing;

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
import Playlist from "../views/Playlist";
import Library from "../views/Library";
import Login from "../views/Login";
import RoutePlaylist from "./RoutePlaylist";
import Player from "../components/Player";
import { ProtectedRoute } from "./ProtectedRoute";

const Routing = () => {
  return (
    <Router>
      {window.localStorage.getItem("access_token") ? (
        <>
          <div className="container-main">
            <div className="container-left">
              <NavBarLeft />
            </div>
            <div className="container-right">
              <NavBarTop />
              <Routes>
                <Route
                  path="/"
                  element={
                    <ProtectedRoute>
                      <Home />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/search"
                  element={
                    <ProtectedRoute>
                      <Search />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/library"
                  element={
                    <ProtectedRoute>
                      <Library />
                    </ProtectedRoute>
                  }
                />
                <Route
                  exact
                  path="/playlist/:id"
                  element={
                    <ProtectedRoute>
                      <Playlist />
                    </ProtectedRoute>
                  }
                />
                // Use /playlist/redirect/:id for access a new playlist from
                navbarleft
                <Route
                  path="/playlist/redirect/:id"
                  element={<RoutePlaylist />}
                />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </div>
          </div>
          <Player />
        </>
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

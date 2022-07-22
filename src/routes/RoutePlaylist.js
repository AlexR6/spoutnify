import React from "react";
import { Navigate } from "react-router-dom";

export default function RoutePlaylist() {
  const id = window.location.href.split("/")[5];
  return <Navigate to={`/playlist/${id}`} replace />;
}

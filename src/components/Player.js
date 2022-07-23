import React from "react";
import "../assets/styles/player.scss";
import SpotifyPlayer from "react-spotify-web-playback";
import { useSelector } from "react-redux";

const Player = () => {
  const trackUri = useSelector((state) => state.trackUri);
  const playSound = useSelector((state) => state.playSound);
  return (
    <SpotifyPlayer
      token={window.localStorage.getItem("access_token")}
      showSaveIcon
      uris={trackUri.trackUri}
      play={playSound.isPlayed}
    />
  );
};

export default Player;

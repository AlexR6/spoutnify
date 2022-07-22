import React from "react";
import { convertMsToMin } from "../utils/convertMs";
const CardTrackPlayer = (props) => {
  const {
    id,
    position,
    durations,
    imageAlbum,
    nameAlbum,
    nameArtist,
    nameTrack,
  } = { ...props, durations: convertMsToMin(props.durations_ms) };
  const handlePlay = (e) => {
    console.log("play");
  };
  return (
    <div className="card-track-player" onClick={handlePlay}>
      <p className="position">{position}</p>
      <div className="container-img-artist">
        <div className="img">
          <img src={imageAlbum} />
        </div>
        <div className="name-artist">
          <p className="name">{nameTrack}</p>
          <p className="artist">{nameArtist}</p>
        </div>
      </div>
      <p className="name-album">{nameAlbum}</p>
      <p className="durations">{durations}</p>
    </div>
  );
};

export default CardTrackPlayer;

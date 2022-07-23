import React from "react";
import { convertMsToMin } from "../utils/convertMs";
import { useDispatch, useSelector } from "react-redux";
import { setTrack } from "../redux/trackUri";
import { setIsPlayed } from "../redux/playSound";

const CardTrackPlayer = (props) => {
  const playSound = useSelector((state) => state.playSound);
  const {
    position,
    durations,
    imageAlbum,
    nameAlbum,
    nameArtist,
    nameTrack,
    trackUri,
  } = { ...props, durations: convertMsToMin(props.durations_ms) };

  const dispatch = useDispatch();
  const handlePlay = (e) => {
    dispatch(setTrack(trackUri));
    if (!playSound.setIsPlayed) {
      dispatch(setIsPlayed(true));
    }
    console.log("ok");
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

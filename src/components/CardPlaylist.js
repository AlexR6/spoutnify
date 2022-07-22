import React from "react";
import Play from "../assets/img/play.png";
import { NavLink } from "react-router-dom";
import "../assets/styles/card-playlist.scss";

const CardPlaylist = (props) => {
  const { id, img, name, description, contextUri } = { ...props };
  return (
    <div className="card-playlist">
      <NavLink to={`/playlist/${id}`}>
        <img src={img} />
        <h4>{name}</h4>
        <p>{description}</p>
        <div className="div-play">
          <img src={Play} />
        </div>
      </NavLink>
    </div>
  );
};

export default CardPlaylist;

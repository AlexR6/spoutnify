import React from "react";
import ArrowRight from "../assets/img/arrow-right-black.png";
import { NavLink } from "react-router-dom";

const CardPlaylist = (props) => {
  const { id, img, name, description } = { ...props };
  return (
    <div className="card-playlist">
      <NavLink to={`/playlist/${id}`}>
        <img src={img} />
        <h4>{name}</h4>
        <p>{description}</p>
        <div className="div-play">
          <img src={ArrowRight} />
        </div>
      </NavLink>
    </div>
  );
};

export default CardPlaylist;

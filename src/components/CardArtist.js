import React from "react";
import Play from "../assets/img/play.png";

const CardPlaylist = (props) => {
  const { id, img, name, type } = { ...props };
  return (
    <div className="card-artist">
      <img src={img} />
      <h4>{name}</h4>
      <p>{type}</p>
      <div className="div-play">
        <img src={Play} />
      </div>
    </div>
  );
};

export default CardPlaylist;

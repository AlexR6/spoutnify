import React from "react";
import ArrowRight from "../assets/img/arrow-right-black.png";

const CardPlaylist = (props) => {
  const { id, img, name, type } = { ...props };
  console.log(img);
  return (
    <div className="card-artist">
      <img src={img} />
      <h4>{name}</h4>
      <p>{type}</p>
      <div className="div-play">
        <img src={ArrowRight} />
      </div>
    </div>
  );
};

export default CardPlaylist;

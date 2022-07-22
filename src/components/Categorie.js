import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { getCategoriePlaylist } from "../services/categoriesService";
import CardPlaylist from "./CardPlaylist";

const Categorie = (props) => {
  const [playlists, setPlaylists] = useState([]);
  const [loading, setLoading] = useState(1);
  const { id, icon, name } = { ...props };

  useEffect(() => {
    getCategoriePlaylist(id)
      .then((res) => setPlaylists(res.data.playlists.items))
      .catch((err) => console.log(err));
  }, [loading]);
  return (
    <div className="container-categorie">
      <div className="title-and-link">
        <h3 className="title-categorie">{name}</h3>
      </div>
      <div className="container-playlist">
        {playlists.map((playlist) => {
          return (
            <CardPlaylist
              key={playlist.id}
              id={playlist.id}
              img={playlist.images[0].url}
              name={playlist.name}
              description={playlist.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Categorie;

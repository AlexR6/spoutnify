import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/img/spoutnify-logo.png";
import IconHome from "../assets/img/home.png";
import IconSearch from "../assets/img/search.png";
import IconLibrary from "../assets/img/library.png";
import { getAllPlaylistUser } from "../services/playlistService";

const NavBarLeft = () => {
  const [playlists, setPlaylists] = useState([]);
  const [loading, setLoading] = useState(1);

  useEffect(() => {
    getAllPlaylistUser()
      .then((res) => setPlaylists(res.data.items))
      .catch((err) => console.log(err));
  }, [loading]);
  return (
    <div className="navbar-left">
      <img src={Logo} className="img-logo" />
      <div className="icon-link-1">
        <div className="div-link">
          <NavLink to="/">
            <img src={IconHome} />
            Accueil
          </NavLink>
        </div>
        <div className="div-link">
          <NavLink to="/search">
            <img src={IconSearch} />
            Rechercher
          </NavLink>
        </div>
        <div className="div-link">
          <NavLink to="/library">
            <img src={IconLibrary} />
            Bibliothèque
          </NavLink>
        </div>
      </div>
      <div className="container-playlist">
        {playlists.map((playlist) => {
          return (
            <NavLink to={`/playlist/redirect/${playlist.id}`} key={playlist.id}>
              {playlist.name}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default NavBarLeft;

import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/img/spoutnify-logo.png";
import IconHome from "../assets/img/home.png";
import IconSearch from "../assets/img/search.png";
import IconLibrary from "../assets/img/library.png";
import IconMore from "../assets/img/more.png";
import IconHearth from "../assets/img/hearth.png";

const NavBarLeft = () => {
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
      <div className="icon-link-2">
        <div className="div-link">
          <NavLink to="/add">
            <div className="div-img-more">
              <img src={IconMore} />
            </div>
            Créer une playlist
          </NavLink>
        </div>
        <div className="div-link">
          <NavLink to="/like">
            <div className="div-img-hearth">
              <img src={IconHearth} />
            </div>
            Titres likés
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBarLeft;

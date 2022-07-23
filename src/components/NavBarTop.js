import React from "react";
import DownwardArrow from "../assets/img/downward-arrow.png";
import { useDispatch, useSelector } from "react-redux";

const NavBarTop = () => {
  const user = useSelector((state) => state.user);

  const handleLogout = () => {
    window.localStorage.removeItem("access_token");
    window.localStorage.removeItem("date_expires_access_token");
    window.location.href = "/login";
  };

  return (
    <div className="navbar-top">
      <div className="div-button-profil">
        <button className="button-profil">
          <img src={user.image} className="img-profil" />
          <p>{user.display_name}</p>
          <img src={DownwardArrow} className="img-arrow" />
        </button>
        <div className="menu">
          <button onClick={handleLogout}>Déconnexion</button>
        </div>
      </div>
    </div>
  );
};

export default NavBarTop;

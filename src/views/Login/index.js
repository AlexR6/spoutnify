import React from "react";
import { getAuthorize } from "../../services/auth";
import { useDispatch } from "react-redux";
import "../../assets/styles/login.scss";
import { setUser } from "../../redux/user";
import { getCurrentUserAuth } from "../../services/userService";

const Index = () => {
  const url = window.location.hash;
  const access_token = url.split("&")[0].split("#access_token=")[1];
  const dispatch = useDispatch();

  if (access_token) {
    window.localStorage.setItem("access_token", access_token);
    window.localStorage.setItem(
      "date_expires_access_token",
      Math.floor(Date.now() / 1000) + 3600
    );
    getCurrentUserAuth().then((res) => {
      const tmp = {
        id: res.data.id,
        display_name: res.data.display_name,
        country: res.data.country,
        followers: res.data.followers.total,
        image: res.data.images[0].url,
      };
      dispatch(setUser(tmp));
    });
    window.location.href = "/";
  }

  return (
    <div className="container-login">
      <h2>Me connecter</h2>
      <button onClick={() => getAuthorize()}>Se connecter</button>
    </div>
  );
};

export default Index;

import axios from "axios";
import qs from "qs";

export const getAuthorize = async () => {
  const redirectUri = "http://localhost:3000/login";
  const scope = "user-read-private user-read-email";
  let url = "https://accounts.spotify.com/authorize?";
  url += qs.stringify({
    response_type: "token",
    client_id: process.env.REACT_APP_CLIENT_ID,
    scope: scope,
    redirect_uri: redirectUri,
    show_dialog: true,
  });
  window.location.href = url;
};

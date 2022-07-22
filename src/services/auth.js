import axios from "axios";
import qs from "qs";

export const getAuthorize = async () => {
  const redirectUri = "http://localhost:3000/login";
  const scope =
    "ugc-image-upload user-modify-playback-state user-read-playback-state user-read-currently-playing user-follow-modify user-follow-read user-read-recently-played user-read-playback-position user-top-read playlist-read-collaborative playlist-modify-public playlist-read-private playlist-modify-private app-remote-control streaming user-read-email user-read-private user-library-modify user-library-read";
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

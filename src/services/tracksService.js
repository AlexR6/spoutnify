import axios from "axios";

export async function getTracksFromPlaylist(idPlaylist) {
  return axios
    .get(`https://api.spotify.com/v1/playlists/${idPlaylist}/tracks`, {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem("access_token")}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
    .then((res) => res)
    .catch((err) => console.log(err));
}

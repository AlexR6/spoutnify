import axios from "axios";

export async function getCurrentPlaylist(idPlaylist) {
  return axios
    .get(`https://api.spotify.com/v1/playlists/${idPlaylist}`, {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem("access_token")}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
    .then((res) => res)
    .catch((err) => console.log(err));
}

export async function getAllPlaylistUser() {
  return axios
    .get(`https://api.spotify.com/v1/me/playlists`, {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem("access_token")}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
    .then((res) => res)
    .catch((err) => console.log(err));
}

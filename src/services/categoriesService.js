import axios from "axios";
import { getAuth } from "./auth";

export async function getCategoriesWithLimit() {
  return axios
    .get(
      "https://api.spotify.com/v1/browse/categories?country=fr&locale=fr_FR&limit=3&offset=0",
      {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem(
            "access_token"
          )}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    )
    .then((res) => res)
    .catch((err) => console.log(err));
}

export async function getCategoriePlaylist(category_id) {
  return axios
    .get(
      `https://api.spotify.com/v1/browse/categories/${category_id}/playlists?country=FR&limit=8&offset=0`,
      {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem(
            "access_token"
          )}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    )
    .then((res) => res)
    .catch((err) => console.log(err));
}

import axios from "axios";

export async function getHitSearch(search) {
  return axios
    .get(
      `https://api.spotify.com/v1/search?type=artist&market=FR&limit=10&offset=0&q=${search}`,
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

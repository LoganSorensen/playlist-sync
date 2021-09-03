import axios from "axios";

export const SpotifyAPI = () => {
  const token = localStorage.getItem("spotifyToken");

  return axios.create({
    headers: {
      authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    baseURL: "https://api.spotify.com/v1/",
  });
};

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

export const YoutubeApi = () => {
  const token = localStorage.getItem("youtubeToken");

  return axios.create({
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    baseURL: "https://www.googleapis.com/youtube/v3/",
  });
};

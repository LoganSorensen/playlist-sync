import React, { useEffect, useState } from "react";

import { SpotifyAPI, YoutubeApi } from "../utils/apiCalls";
import SpotifyPlaylists from "./SpotifyPlaylists";

const Sync = ({ userId }) => {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    let accessToken = window.location.hash.substring(1);
    accessToken = accessToken.split("&")[0].split("=")[1];
    accessToken && localStorage.setItem("youtubeToken", accessToken);
  }, []);

  useEffect(() => {
    SpotifyAPI()
      .get(`/users/${userId}/playlists`)
      .then((res) => {
        setPlaylists(res.data.items);
      })
      .catch((err) => console.log(err));
  }, [userId]);

  const createPlaylist = () => {
    const data = {
      "snippet": {
        "title": "Test Playlist from Sync"
      },
    };

    YoutubeApi()
      .post("/playlists?part=snippet", data)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="sync">
      <SpotifyPlaylists playlists={playlists} />
      <button onClick={createPlaylist}>create youtube playlist</button>
    </div>
  );
};

export default Sync;

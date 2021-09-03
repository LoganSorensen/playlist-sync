import React, { useEffect, useState } from "react";

import { SpotifyAPI } from "../utils/apiCalls";
import SpotifyPlaylists from "./SpotifyPlaylists";

const Sync = ({ userId }) => {
    const [playlists, setPlaylists] = useState([])

  useEffect(() => {
    let accessToken = window.location.hash.substring(1);
    accessToken = accessToken.split("&")[0].split("=")[1];
    localStorage.setItem("spotifyToken", accessToken);
  }, []);

  useEffect(() => {
    SpotifyAPI()
      .get(`/users/${userId}/playlists`)
      .then((res) => {
        // console.log(res.data);
        setPlaylists(res.data.items)
      })
      .catch((err) => console.log(err));
  }, [userId]);

//   console.log(userId);

  return (<div className="sync">
      <SpotifyPlaylists playlists={playlists} />
  </div>);
};

export default Sync;

import React, { useState } from "react";

const SpotifyPlaylists = ({ playlists }) => {
  const [activePlaylist, setActivePlaylist] = useState(null);

//   console.log(playlists);
  return (
    <ul className="spotify-playlists">
      {playlists.map((playlist) => (
        <li
          className={
            activePlaylist?.id === playlist.id
              ? "playlist playlist--selected"
              : "playlist"
          }
          key={playlist.id}
          onClick={() => setActivePlaylist(playlist)}
        >
          <div className="img-wrapper">
            <img src={playlist.images[2].url} alt={playlist.name} />
          </div>
          <p>{playlist.name}</p>
        </li>
      ))}
    </ul>
  );
};

export default SpotifyPlaylists;

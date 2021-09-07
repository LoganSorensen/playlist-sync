import React from "react";

const SpotifyAuth = () => (
  <div className="spotify-auth">
    <a
      href="https://accounts.spotify.com/authorize/?client_id=e890718fcfb44214a9f2e03086e65d44&redirect_uri=http:%2F%2Flocalhost:3000/youtubeAuth&scope=playlist-modify-public%20user-follow-read%20user-top-read%20user-library-read&response_type=token"
      className="auth-link"
    >
      Spotify Auth
    </a>
  </div>
);


export default SpotifyAuth;
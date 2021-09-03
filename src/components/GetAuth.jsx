import React from "react";

const GetAuth = () => {
  return (
    <div className="get-auth">
      <a
        href="https://accounts.spotify.com/authorize/?client_id=e890718fcfb44214a9f2e03086e65d44&redirect_uri=http:%2F%2Flocalhost:3000/home&scope=playlist-modify-public%20user-follow-read%20user-top-read%20user-library-read&response_type=token"
        className="auth-link"
      >
        Spotify Auth
      </a>
      <a
        href="https://accounts.google.com/o/oauth2/v2/auth?client_id=132145024779-fah9iu6oqr0pp3lt5s1f5tlq6o3sq4ju.apps.googleusercontent.com&redirect_uri=http%3A//localhost:3000/home&scope=https%3A//www.googleapis.com/auth/youtube&response_type=token"
        className="auth-link"
      >
        Youtube Auth
      </a>
    </div>
  );
};

export default GetAuth;

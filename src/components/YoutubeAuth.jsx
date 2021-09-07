import React, { useEffect } from "react";

const YoutubeAuth = () => {
  useEffect(() => {
    let accessToken = window.location.hash.substring(1);
    accessToken = accessToken.split("&")[0].split("=")[1];
    accessToken && localStorage.setItem("spotifyToken", accessToken);
  }, []);

  return (
    <div className="youtube-auth">
      <a
        href="https://accounts.google.com/o/oauth2/v2/auth?client_id=132145024779-fah9iu6oqr0pp3lt5s1f5tlq6o3sq4ju.apps.googleusercontent.com&redirect_uri=http%3A//localhost:3000/sync&scope=https%3A//www.googleapis.com/auth/youtube&response_type=token"
        className="auth-link"
      >
        Youtube Auth
      </a>
    </div>
  );
};

export default YoutubeAuth;

import { useEffect, useState } from "react";
import { Route } from "react-router-dom";

import "./App.css";

// import GetAuth from "./components/GetAuth";
import SpotifyAuth from "./components/SpotifyAuth";
import Sync from "./components/Sync";
import YoutubeAuth from "./components/YoutubeAuth";
import { SpotifyAPI } from "./utils/apiCalls";

function App() {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    SpotifyAPI()
      .get("me")
      .then((res) => {
        console.log(res.data);
        setUserId(res.data.id);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <Route exact path="/" component={SpotifyAuth} />
      <Route path="/youtubeAuth" component={YoutubeAuth} />
      <Route path="/sync">
        <Sync userId={userId} />
      </Route>
    </div>
  );
}

export default App;

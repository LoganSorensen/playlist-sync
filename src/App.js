import { useEffect, useState } from "react";
import { Route } from "react-router-dom";

import "./App.css";

import GetAuth from "./components/GetAuth";
import Sync from "./components/Sync";
import { SpotifyAPI } from "./utils/apiCalls";

function App() {
  const [userId, setUserId] = useState(null)

  useEffect(() => {
    SpotifyAPI()
      .get("me")
      .then((res) => {
        console.log(res.data);
        setUserId(res.data.id)
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <Route exact path="/" component={GetAuth} />
      <Route path="/home">
        <Sync userId={userId} />
      </Route>
    </div>
  );
}

export default App;

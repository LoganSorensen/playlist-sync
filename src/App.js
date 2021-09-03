import { Route } from "react-router-dom";

import "./App.css";

import GetAuth from "./components/GetAuth";
import Sync from "./components/Sync";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={GetAuth} />
      <Route path="/home" component={Sync} />
    </div>
  );
}

export default App;

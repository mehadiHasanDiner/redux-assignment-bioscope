import React from "react";
import 'antd/dist/antd.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from "./components/Home/Home";
import WatchList from "./components/WatchList/WatchList";
import Watched from "./components/Watched/Watched";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/watchlist'>
          <WatchList/>
        </Route>
        <Route path='/watched'>
          <Watched/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

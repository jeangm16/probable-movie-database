import React from "react";
import "./App.css";
import "./Search.js";
import "react-modal-video/css/modal-video.min.css";
import "../css/style.css";
import { Route, Switch } from "react-router-dom";

const App = () => (
  <div>
    <Switch>
      <Route
        exact
        path="/"
        component={(props) => <PopularMovies {...props} />}
      />
      <Route
        exact
        path="/movie/:id"
        component={(props) => <MovieDetails {...props} />}
      />
    </Switch>
  </div>
);

export default App;

export default App;

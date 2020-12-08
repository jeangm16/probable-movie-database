import React from "react";
import "../css/App.css";
import "./search.js";
import "react-modal-video/css/modal-video.min.css";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import PopularMovies from "./popMovies";
import MovieDetails from "./movieDetails";

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

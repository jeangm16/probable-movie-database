import React from "react";
import { Route, Switch } from "react-router-dom";
import "react-modal-video/css/modal-video.min.css";
import PopularMovies from "./popMovies";
import MovieDetails from "./movieDetails";
import "../css/style.css";

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

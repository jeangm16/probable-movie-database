import React, { Component } from "react";
import { Grid, Row } from "react-bootstrap";
import Search from "./Search";
import axios from "axios";
import { Grid, Row } from "react-bootstrap";

class PopularMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
    };
  }
  componentDidMount() {
    axios
      .get(`${URL_DETAIL}popular${API_KEY}&language=en-US&page=1`)
      .then((response) => {
        this.setState({ results: response.data.results });
      });
    document.body.style.backgroundImage = `url()`;
  }

  render() {
    const movies = this.state.results.map((movie) => (
      <MovieCard key={movie.id} movie={movie} />
    ));
    return (
      <div className="search">
        <Search />
        <Grid fluid={false}>
          <Row>{movies}</Row>
        </Grid>
      </div>
    );
  }
}

export default PopularMovies;

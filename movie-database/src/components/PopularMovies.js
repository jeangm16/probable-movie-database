import React, { Component } from "react";
import Search from "./Search";
import axios from "axios";
import { Container } from "react-bootstrap";
import MovieCard from "./MovieCard";
import { URL_DETAIL, API_KEY } from "./Const";

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
        <Container fluid={false}>
          <Row>{movies}</Row>
        </Container>
      </div>
    );
  }
}

export default PopularMovies;

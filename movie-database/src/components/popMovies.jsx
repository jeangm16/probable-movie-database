import React, { Component, Container } from "react";
import Search from "./search";
import axios from "axios";
import MovieCard from "./card";
import URL from "../const";
import { Row } from "react-bootstrap";

class PopularMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
    };
  }
  componentDidMount() {
    axios
      .get(`${URL.URL_DETAIL}popular${URL.API_KEY}&language=en-US&page=1`)
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

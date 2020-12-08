import axios from "axios";
import Search from "./Search";
import React, { Component } from "react";
import { URL_DETAIL, API_KEY } from "./Const.js";
import DetailMovieCard from "./DetailMovieCard";

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieData: {},
    };
  }
  componentDidMount() {
    const { id } = this.props.match.params;

    axios
      .get(`${URL_DETAIL}${id}${API_KEY}&language=en-US&page=1`)
      .then((response) => {
        this.setState({ movieData: response.data });
      });
  }
  render() {
    let movieData;
    if (
      typeof this.state.movieData !== "undefined" ||
      !this.state.movieData.isEmpty()
    ) {
      movieData = <DetailMovieCard movie={this.state.movieData} />;
    } else {
      movieData = <div> Loading !</div>;
    }

    return (
      <div className="movie-container">
        {" "}
        <Search />
        {movieData}
      </div>
    );
  }
}
export default MovieDetails;

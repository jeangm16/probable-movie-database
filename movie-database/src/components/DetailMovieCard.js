import React, { Component } from "react";
import styled from "styled-components";
import { URL_IMAGE, URL_BACKGROUND } from "../const";

class DetailMovieCard extends Component {
  componentDidUpdate() {
    document.body.style.backgroundImage = `url(${URL_BACKGROUND}${this.props.movie.backdrop_path})`;
  }

  render() {
    const {
      original_title,
      vote_count,
      vote_average,
      poster_path,
    } = this.props.movie;

    let modalID;
    if (typeof this.props.movie.id !== "undefined") {
      modalID = <Modal modal={this.props.movie.id} />;
    } else {
      modalID = <div>Loading !!! </div>;
    }
    return (
      <div className="container my-container">
        <div className="col-xs-12 wrapper"></div>
      </div>
    );
  }
}
export default DetailMovieCard;

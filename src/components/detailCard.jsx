import React, { Component } from "react";
import URL from "../const.js";
import { shape } from "prop-types";
import TMDBlogo from "../images/TMDBlogo.svg";
import Modal from "./modal";
import styled from "styled-components";

const Image = styled.img`
  width: 100%;
  border-radius: 0 0 3px 3px;
  float: left;
`;

class DetailMovieCard extends Component {
  componentDidUpdate() {
    document.body.style.backgroundImage = `url(${URL.URL_BACKGROUND}${this.props.movie.backdrop_path})`;
  }

  render() {
    const {
      original_title,
      vote_average,
      poster_path,
      release_date,
      budget,
      tagline,
      vote_count,
      overview,
      runtime,
      revenue,
    } = this.props.movie;

    let modalID;
    if (typeof this.props.movie.id !== "undefined") {
      modalID = <Modal modal={this.props.movie.id} />;
    } else {
      modalID = <div>Loading !!! </div>;
    }
    return (
      <div className="container my-container">
        <div className="col-xs-12 wrapper">
          <div className="poster-container col-xs-12 col-md-4 pull-md-8 col-lg-5 pull-lg-7 nopadding">
            <Image
              alt={`Title is ${original_title}`}
              src={
                poster_path === "undefined"
                  ? TMDBlogo
                  : URL.URL_IMAGE + poster_path
              }
            />
          </div>
          <div className="meta-data-container col-xs-12 col-md-8 push-md-4 col-lg-7 push-lg-5">
            <h2>{original_title} </h2>
            <ul className="row item-list">
              <li className="col-m-4">
                <span className="green item-Glyph" glyph="star" />
                {vote_average}
              </li>
              <li className="col-m-4">
                <span className="green item-Glyph" glyph="heart" />
                {vote_count}
              </li>
              {modalID}
            </ul>
            <span className="movie-tagline"> {tagline} </span>
            <p className="movie-overview">{overview} </p>
            <div className="movie-subdetails">
              <div className="row nopadding">
                <div className="col-xs-6">
                  Realease Date:
                  <span className="movie-metadata"> {release_date} </span>
                </div>
                <div className="col-xs-6">
                  Running Time:
                  <span className="movie-metadata"> {runtime} mins</span>
                </div>
              </div>
              <div className="row movie-subdetails2">
                <div className="col-xs-6">
                  Budget:
                  <span className="movie-metadata"> $ {budget} </span>
                </div>
                <div className="col-xs-6">
                  Revenue:
                  <span className="movie-metadata"> $ {revenue} </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

DetailMovieCard.propTypes = {
  movie: shape({
    original_title: String,
    vote_average: Number,
    backdrop_path: String,
    release_date: String,
    budget: Number,
    tagline: String,
    vote_count: Number,
    overview: String,
    runtime: Number,
    revenue: Number,
  }).isRequired,
};

export default DetailMovieCard;

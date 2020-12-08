import React from "react";
import "../css/MovieCard.css";
import { shape, string, number } from "prop-types";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import styled from "styled-components";

const Wrapper = styled((Link: any));

const MovieCard = (props) => (
  <Col xs={12} sm={12} md={6} lg={6}>
    <Wrapper to={`/movie/${props.movie.id}`}>
      <img
        className="card-image"
        alt={`${props.movie.title} Movie Poster`}
        src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`}
      />
      <div className="card-details">
        <h3>{props.movie.title}</h3>
        <p className="text-ellipsis"> {props.movie.overview} </p>
      </div>
    </Wrapper>
  </Col>
);

MovieCard.propTypes = {
  movie: shape({
    title: string.isRequired,
    poster_path: string.isRequired,
    overview: string.isRequired,
    id: number.isRequired,
  }).isRequired,
};

export default MovieCard;

import React from "react";
import "./MovieCard.css";

// const Wrapper = styled((link: any));

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

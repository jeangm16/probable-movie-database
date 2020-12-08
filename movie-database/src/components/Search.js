import React, { Component } from "react";
import { Navbar } from "react-bootstrap/lib";
import _debounce from "lodash/debounce";
import axios from "axios";
import styled from "styled-components";
import Autosuggest from "react-autosuggest";
import { Link } from "react-router-dom";
import TMDBlogo from "../images/movie_logo.svg";
import { URL_SEARCH, API_KEY_ALT, IMG_SIZE_XSMALL } from "../const";

const getSuggestionValue = (suggestion) => {
  const newsuggest = suggestion.title;

  return newsuggest;
};

const renderSuggestion = (suggestion) => (
  <div>
    <Link to={`/movie/${suggestion.id}`}>
      <img
        className="searchResult-image"
        alt={`Poster Path ${suggestion.title}`}
        src={
          suggestion.poster_path === null
            ? TMDBlogo
            : IMG_SIZE_XSMALL + suggestion.poster_path
        }
      />
      <div className="searchResult-text">
        <div className="searchResult-name">{suggestion.title}</div>
        <div className="searchResult-date">
          {suggestion.release_date.trim(0, 4)}
        </div>
      </div>
    </Link>
  </div>
);

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      suggestions: [],
    };
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue,
    });
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    const url = URL_SEARCH + inputValue + API_KEY_ALT;

    /* eslint-disable no-console */

    return inputLength === 0
      ? []
      : axios
          .get(url)
          .then((response) => {
            this.setState({ suggestions: response.data.results });
          })
          .catch((error) => {
            console.log(`Error Message ${error}`);
          });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };
}

export default Search;

import React, { Component } from "react";
import _debounce from "lodash/debounce";
import axios from "axios";
import styled from "styled-components";
import Autosuggest from "react-autosuggest";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap/lib";
import TMDBlogo from "../images/TMDBlogo.svg";
import { URL_SEARCH, API_KEY_ALT, IMG_SIZE_XSMALL } from "../const";

// When suggestion is clicked, Autosuggest needs to populate the input based on the clicked suggestion.
// Debounce allows me to “group” multiple sequential calls in a single one.

const Brand = styled.span`
  fontweight: bold;
  texttransform: caplitalize;
  paddingleft: 10;
  fontsize: 1.2em;
`;

const Image = styled.img`
  height: 100%;
  width: auto;
  paddingleft: 10px;
  margintop: -8px;
  display: inline-block;
`;

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

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  render() {
    const { value, suggestions } = this.state;

    const inputProps = {
      placeholder: "Type a Movie Title",
      value,
      onChange: this.onChange,
    };

    const onSuggestionsFetchRequested = _debounce((term) => {
      this.onSuggestionsFetchRequested(term);
    }, 1000);
    /* eslint-disable */

    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/#">
              <Brand />
              <Image alt=" " src={TMDBlogo} />
            </a>
          </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Form pullRight>
          <Autosuggest
            suggestions={suggestions}
            onSuggestionsFetchRequested={onSuggestionsFetchRequested}
            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            inputProps={inputProps}
          />
        </Navbar.Form>
      </Navbar>
    );
  }
}

export default Search;

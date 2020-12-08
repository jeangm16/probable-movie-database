import React, { Component } from 'react';
import { Grid , Row } from 'react-bootstrap';
import Search from './Search';

class PopularMovies extends Component {

    constructor(props) {
    super(props);
    this.state = {
    results : []
  };

  }
  componentDidMount() {
    axios.get(`${URL_DETAIL}popular${API_KEY}&language=en-US&page=1`)
    .then((response) => {
      this.setState({results : response.data.results});
      });
    document.body.style.backgroundImage = `url()`;
  }
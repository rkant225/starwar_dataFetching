import React from "react";
import Characters from "../starwar/Characters";
import axios from 'axios';
import Header from '../Header/Header';

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { characters: {} };
  }
  componentDidMount() {
    const url = "https://swapi.dev/api/people/";
    this.fetchData(url)
  }

  fetchData = (url) =>{
    axios.get(url)
      .then(result => this.setState({ characters: result.data }));
  }

  navigateNext = async () => {
    const url = this.state.characters.next || "";
    if(url){
        this.fetchData(url);
    }
  };

  navigateBack = async () => {
    const url = this.state.characters.previous || "";
    console.log(url)
    if(url){
        this.fetchData(url);
    }
  };

  render() {
    return (
      <div>
        <Header count={this.state.characters.count} />

        <Characters characters={this.state.characters.results} />

        <div className="controllButtons">
          <button onClick={this.navigateBack}> {"<< Prev"}</button>
          <button onClick={this.navigateNext}> {"Next >>"}</button>
        </div>
      </div>
    );
  }
}

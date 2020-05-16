import React from "react";
import axios from 'axios';

export default class Character extends React.Component {
  state = { homeWorld: "", shipNames : [], isLoading : true};

  componentDidMount() {
    if (this.props.character) {
      this.fetchHomeWorld();
      this.fetchShipNames();
    }
  }

  fetchShipNames = () =>{
    const ships = this.props.starships;
    ships.forEach(url => 
        axios.get(url)
            .then(res => this.setState({shipNames : [...this.state.shipNames, res.data.name]}))
       )
  }

  fetchHomeWorld = () =>{
    const url = this.props.character.homeworld;
    axios.get(url)
       .then(res => this.setState({homeWorld : res.data.name}))
       .finally(()=> this.setState({isLoading : false}))
  }

  getShipNames=()=>{
      return this.state.shipNames.join(', ' )
  }

  render() {
    const { films, starships } = this.props;
    const { name } = this.props.character;
    const { homeWorld, isLoading } = this.state;

    

    return (
      <div className="characterCard">
        {this.state.isLoading ? "Loading..." : 
        <div>
        <h3>{name}</h3>
        <p>
            <b>HomeWorld :</b><span>{homeWorld}</span>
            <br/>
            <b>Films :</b><span>{films.length}</span>
            <br/>
            <b>StarShips :</b><span>{starships.length}</span>
            <br/>
            <b>ShipNames :</b><span>{this.getShipNames()}</span>
        </p>
        </div>}
      </div>
    );
  }
}

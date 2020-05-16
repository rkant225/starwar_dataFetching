import React from "react";
import Character from './Character';

export default class Characters extends React.Component {
  

  render(){
    const {characters} = this.props;

    if(!characters){
        return "Loading...."
    }

    return (
      <div className="characters">
        {characters && characters.length > 0 && 
          characters.map(character => 
            <Character 
                key={character.name} 
                character={character} 
                films={character.films} 
                starships={character.starships}/>)}
      </div>
    );
  }
}

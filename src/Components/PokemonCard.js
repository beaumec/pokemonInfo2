import React from "react";
import { Container, Row } from "react-bootstrap";

export default function PokemonCard({ pokemon }) {

  const getImageUrl = (objUrl = {}) => {
    
    let imgValues = Object.values(objUrl);
    // console.log(imgValues)
    let imgValueUrl = imgValues.find((img) => img !== null);
       
    return imgValueUrl;
  };

  const getPokemonStats = (pokemonStats = []) => {
    // Iterate over the array of stats and display each stat
    return pokemonStats.map((stat, index) => (
      <div key={index}>
        {`${stat.stat.name}: ${stat.base_stat}`}
      </div>
    ));
  };

  const getPokemonType = (pokeType = []) => {
     // Iterate over the array of stats and display each stat
     return pokeType.map((type, index) => (
      <div key={index}>
        {`${type.type.name}: ${type.type.name}`}
      </div>
    ));
    return 
  }


  return (
    <Container  style={{color: "purple", backgroundColor:"papayawhip", border: "blue"}}>
      <img        
        style={{ width: "200", height: "200px", position: "relative" }}
        src={getImageUrl(pokemon.sprites) || ""}
      />
      <div style={{margin:"10px", fontSize:"20px"}}>Pokemon Name : {pokemon.name}</div>
      <div style={{backgroundColor:"grey", margin:"10px", fontSize:"20px"}}>Pokemon types : {getPokemonType(pokemon.types)}</div>
      <div style={{backgroundColor:"yellow"}}>Pokemon stats : {getPokemonStats(pokemon.stats)}</div>
      
    </Container>
  );
}

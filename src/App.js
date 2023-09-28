import React, { useState, useEffect } from "react";
import PokemonList from "./Components/PokemonList";
import PokemonCard from "./Components/PokemonCard";
import { Container, Button, Card,Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css";

function App() {
  const [pokemon, setPokemon] = useState({});
  const [pokemons, setPokemons] = useState([]);
  const [query, setQuery] = useState("");

  //  console.log(query)

  useEffect(() => {
    fetchPokemonData("https://pokeapi.co/api/v2/pokemon?limit=1300");
  }, []);

  const fetchPokemonData = (url) => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(data)
        if (data.results) {
          setPokemons(data.results);
        } else {
          setPokemon(data);
        }
      })
      .catch((error) => console.log("error :", error));
  };
  

console.log(pokemon)

  return (
    <Container fluid>


    <div className="App">
      <input
        style={{margin:"10px"}}
        type="text"
        placeholder="Search Pokemon..."
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button variant="outline-success"
        style={{ backgroundColor: "orange"}}
        onClick={() => {
          if( !query) {
            alert("Write a pokemon name") 
            return null
            
          }
          const result = pokemons.find((p) => p.name.toLowerCase() === query);
          fetchPokemonData(result.url);
          // console.log(result)
        }}
      >
        Search
      </Button >
      <Col className="justify-content-md-center">
      <Card  > 
        <PokemonCard pokemon={pokemon} />
      </Card>
      </Col>
   
      {query? <PokemonList pokemons={pokemons} />: null}
    </div>
    </Container>
  );
}

export default App;




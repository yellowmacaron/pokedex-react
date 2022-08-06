import axios from "axios";
import React, { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";

function Pokedex() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=50&offset=0")
      .then((res) => {
        //setPokemons(res.data.results);
        res.data.results.forEach((pokemon) => {
          const poke = axios.get(
            `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
          );
          setPokemons((p) => [...p, poke.data]);
        });
      });
  }, []);
  /* useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=50&offset=0")
      .then((res) => {
        setPokemons(res.data.results.map((p) => p.name));
        console.log(setPokemons());
        //const newIndex=("00"+(index+1)).slice(-3);
        //const image=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${newIndex}.svg`
      });
  }, []);*/
  return;
}

export default Pokedex;

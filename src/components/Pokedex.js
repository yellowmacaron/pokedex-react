import axios from "axios";
import React, { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";

function Pokedex() {
  const [pokemons, setPokemons] = useState([]);
  const [currentPageUrl, setcurrentPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [nextPageUrl, setNextPageUrl] = useState();
  const [loading, setLoading] = useState(true);
  const getPokemon = async () => {
    const res = await axios.get(currentPageUrl);
    setLoading(false);
    setNextPageUrl(res.data.next);
    console.log(res.data.results);
    res.data.results.forEach(async (pokemon) => {
      const poke = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
      );
      setPokemons((p) => [...p, poke.data]);
      // console.log(pokemons);
    });
  };

  useEffect(() => {
    setLoading(true);
    getPokemon();
  }, []);

  if (loading) return "Loading....";

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {pokemons ? (
          pokemons.map((pokemon) => (
            <div>
              <PokemonCard
                key={pokemon.index}
                name={pokemon.name}
                img={pokemon.sprites.other.dream_world.front_default}
                id={pokemon.id}
              />
            </div>
          ))
        ) : (
          <p>Loading pokemons</p>
        )}
      </div>
    </>
  );
}

export default Pokedex;

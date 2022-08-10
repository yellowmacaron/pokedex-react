import axios from "axios";
import React, { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import { Link } from "react-router-dom";

export default function Favorites() {
  const [favPoke, setFavePoke] = useState(null);

  const heartPoke = async (i) => {
    const res = await axios.get(`http://localhost:4000/results/`);
    setFavePoke(res.data);
    console.log(res.data);
  };
  useEffect(() => {
    heartPoke();
  }, []);
  return (
    <div>
      <div className="ml-20 mr-20">
        {" "}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">
          {favPoke ? (
            favPoke.map((pokemon, index) => (
              <div>
                <Link to={`/pokedex/${pokemon.id}`}></Link>
                <PokemonCard
                  pokemon={pokemon.name}
                  key={pokemon.id}
                  name={pokemon.name}
                  img={pokemon.img}
                  id={pokemon.id}
                  types={pokemon.types.map((type) => type)}
                  index={index}
                  setFavePoke={setFavePoke}
                />
              </div>
            ))
          ) : (
            <p>Loading pokemons</p>
          )}
        </div>
      </div>
    </div>
  );
}

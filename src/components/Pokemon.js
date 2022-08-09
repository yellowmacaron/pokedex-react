import React, { useEffect, useState } from "react";
import Pokedex from "./Pokedex";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Pokemon({}) {
  const params = useParams();
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const getPokemondata = async () => {
    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${params.id}`
    );
    setPokemonDetails(res.data);
    console.log(res.data.stats);
  };
  useEffect(() => {
    getPokemondata();
    setLoading(true);
  }, [params]);
  const height = pokemonDetails.height / 10;

  return (
    <div className="w-600px h-max bg-cyan-400 m-10 p-10">
      <div>
        <h1>
          {pokemonDetails &&
            pokemonDetails.name.replace(/^./, (str) => str.toUpperCase())}
        </h1>
      </div>
      <div>{<h1>Height: {height} m</h1>}</div>
      <div>
        {/* {pokemonDetails &&
          pokemonDetails.types.map((t) => {
            <h2>{t.name}</h2>;
          })} */}
      </div>
      <div>
        {pokemonDetails &&
          pokemonDetails.stats.map((s) => (
            <h1>
              {s.stat.name.replace(/^./, (str) => str.toUpperCase())} :
              {s.base_stat}
            </h1>
          ))}
      </div>
    </div>
  );
}

import React from "react";
import Pokedex from "./Pokedex";

export default function PokemonCard({ name, id, img }) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
        <div className="container bg-purple-200">
          <h1>{name}</h1>
          <h3>{id}</h3>
          <img src={img} alt="pokemon" className="w-4/12 h-4/12" />
        </div>
      </div>
    </>
  );
}

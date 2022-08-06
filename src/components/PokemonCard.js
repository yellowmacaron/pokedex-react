import React from "react";
import Pokedex from "./Pokedex";

export default function PokemonCard({ name, id }) {
  return (
    <>
      <div className="row-col-sm-4">
        <h1>{name}</h1>
        <h3>{id}</h3>
      </div>
    </>
  );
}

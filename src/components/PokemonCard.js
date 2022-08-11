import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Pokedex from "./Pokedex";
import axios from "axios";
import TypeColor from "./Type_color";

export default function PokemonCard({
  name,
  id,
  img,
  types,
  index,
  setFavePoke,
  setSelectedPokemon,
}) {
  const themeColor = `${TypeColor[types[0]]}`;

  const savePokemon = async () => {
    const response = await axios.post("http://localhost:4000/results", {
      name,
      id,
      types,
      img,
    });
  };

  const deletePokemon = async () => {
    console.log(index);

    const response = await axios.delete(`http://localhost:4000/results/${id}`);
    setFavePoke((prev) => prev.filter((pokemon) => pokemon.id !== id));
  };
  function ShowPokemonStats(e, pokemonId) {
    setSelectedPokemon(pokemonId);
  }
  return (
    <>
      <div>
        <div className="flex justify-end">
          {" "}
          <button
            className="fa fa-heart text-red-700 text-xl"
            onClick={savePokemon}
          ></button>
          <button
            className="fa fa-remove text-xl"
            onClick={deletePokemon}
          ></button>
        </div>

        <div
          className="container rounded-[10px] p-[10px] flex flex-1 flex-col justify-center align-items-center relative cursor-pointer shadow-lg shadow-gray-200/50"
          style={{ backgroundColor: `${themeColor}` }}
        >
          <Link to={"/pokemon/" + id}>
            <h3 className="absolute top-0 left-0 text-[18px] font-bold  p-2">
              #{id.toString().padStart(3, "0")}
            </h3>{" "}
            <img
              src={img}
              alt={name}
              className="w-[150px] h-[150px] m-[10px] mx-auto "
            />
            <h1 className="  text-[20px] font-bold text-center pb-1">
              {name.replace(/^./, (str) => str.toUpperCase())}
            </h1>
            <div className="flex gap-3 flex-1 flex-row w-full justify-center align-items-center">
              {types.map((t) => (
                <h2
                  className="p-1 rounded-[10px] border-2 border-black w-[80px] text-center"
                  style={{
                    backgroundColor: `${TypeColor[t]}`,
                  }}
                >
                  {t.replace(/^./, (str) => str.toUpperCase())}
                </h2>
              ))}
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

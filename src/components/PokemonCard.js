import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Pokedex from "./Pokedex";
import axios from "axios";

export default function PokemonCard({ name, id, img, types }) {
  const TYPE_COLORS = {
    bug: "#92bc2c",
    dragon: "#0c69c8",
    fighting: "#d3425f",
    fire: "#fba54c",
    flying: "#a1bbec",
    grass: "#5fbd58",
    ground: "#da7c4d",
    ghost: "#5f6dbc",
    ice: "#75d0c1",
    normal: "#a0a29f",
    poison: "#b763cf",
    psychic: "#fa8581",
    rock: "#c9bb8a",
    water: "#539ddf",
    fairy: "#ee90e6",
    electric: "#f2d94e",
    dark: "#595761",
    steel: "#5695a3",
  };
  const POKE_TYPE_COLOR = {
    bug: "green-400",
    dark: "gray-800",
    dragon: "purlple-800",
    electric: "yellow-400",
    fairy: "pink-400",
    fighting: "red-900",
    fire: "red-400",
    flying: "indigo-600",
    ghost: "indigo-700",
    grass: "green-600",
    ground: "yellow-700",
    ice: "blue-400",
    normal: "gray-500",
    poision: "purple-600",
    psychic: "pink-700",
    rock: "yellow",
    steel: "gray-400",
    water: "blue-500",
  };

  const themeColor = `${TYPE_COLORS[types[0]]}`;

  const savePokemon = async () => {
    //setFavorite({  });
    const response = await axios.post("http://localhost:4000/results", {
      name,
      id,
      types,
      img,
    });
  };
  //const response = await axios.delete("http://localhost:4000/favpokemon/index"
  return (
    <>
      <div>
        <button className="bg-slate-400" onClick={savePokemon}>
          <h3>Fav</h3>
        </button>
        <div
          className="container rounded-[10px] p-[10px] flex flex-col justify-center align-items-center relative cursor-pointer shadow-lg shadow-gray-200/50"
          style={{ backgroundColor: `${themeColor}` }}
        >
          <Link to={"/pokemon/" + id}>
            <h3 className="absolute top-0 left-0 text-[18px] font-bold  p-2">
              #{id.toString().padStart(3, "0")}
            </h3>{" "}
            <h1 className="  text-[20px] absolute top-[70px] right-[40px] font-bold ">
              {name.replace(/^./, (str) => str.toUpperCase())}
            </h1>
            <img
              src={img}
              alt="pokemon"
              className="w-[150px] h-[150px] m-[10px] "
            />
            {
              <div className="absolute flex p-1 bottom-[40px] right-[50px]">
                {types.map((t) => (
                  <h2
                    className="p-[5px] pr-[10px] pl-[10px] rounded-[10px] border-2 border-black"
                    style={{
                      backgroundColor: `${TYPE_COLORS[t]}`,
                    }}
                  >
                    {t}
                  </h2>
                ))}

                {/* {pokemon.types.map((type) => (
                <div className="container">
                  <div className=" ">{type.type.name.toUpperCase()}</div>
                </div>
              ))} */}
              </div>
            }
          </Link>
        </div>
      </div>
    </>
  );
}

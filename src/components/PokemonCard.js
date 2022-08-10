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
}) {
  const themeColor = `${TypeColor[types[0]]}`;

  const savePokemon = async () => {
    //setFavorite({  });
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
  return (
    <>
      <div>
        <button className="bg-slate-400" onClick={savePokemon}>
          <h3>Fav</h3>
        </button>
        <button onClick={deletePokemon}>X</button>
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
                      backgroundColor: `${TypeColor[t]}`,
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

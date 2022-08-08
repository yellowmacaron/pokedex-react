import React from "react";
import Pokedex from "./Pokedex";

export default function PokemonCard({ name, id, img }) {
  return (
    <>
      <div>
        <div className="container bg-cyan-100 rounded-[10px] p-[10px] flex flex-col relative cursor-pointer shadow-lg shadow-gray-200/50">
          <h3 className="absolute top-0 left-0 text-[16px] bg-sky-50 p-1">
            #{id}
          </h3>
          <h1 className="  text-[20px] absolute top-[70px] right-[40px] font-bold">
            {name}
          </h1>
          <img
            src={img}
            alt="pokemon"
            className="w-[150px] h-[150px] m-[10px] "
          />
        </div>
      </div>
    </>
  );
}

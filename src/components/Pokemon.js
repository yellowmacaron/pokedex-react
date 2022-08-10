import React, { useEffect, useState } from "react";
import Pokedex from "./Pokedex";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./layout/Pokemon.css";

export default function Pokemon({}) {
  const params = useParams();
  const [pokemonDetails, setPokemonDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const getPokemondata = async () => {
    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${params.id}`
    );
    setPokemonDetails(res.data);
    console.log(res.data.name);
  };
  useEffect(() => {
    getPokemondata();
    setLoading(false);
  }, [params]);
  const height = pokemonDetails.height / 10;

  const Progress = () => {};

  return (
    <div className="bg-neutral-100 p-[50px] flex align-items-center justify-center">
      <div className=" p-4 max-w-5xl grid gap-4 md:grid-cols-2   bg-slate-50 rounded-[40px]">
        <h1 className="xs-grid lg:column-star-1 md:row-start-1"></h1>
        <div className="text-4xl font-extrabold md:col-start-1 md:col-span-2 text-center">
          Bulbasaur <span>(#OO1)</span>
        </div>

        <div className="md:row-start-3 md:row-span-4">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
            alt=""
          ></img>
        </div>
        <div className="">
          <div className="md:row-start-3 p-[40px]">
            <p className="inform">
              A strange seed was planted on its back at birth.The plant sprouts
              and grows with this POKéMON.
            </p>
            <p className="inform">
              <span className="font-bold">Height:</span> 0.7cm
            </p>
            <p className="inform">
              <span className="font-bold">Weight:</span> 69 kg
            </p>
            <p className="inform">
              <span className="font-bold">Abilities:</span> Overgrow Chlorophyll
            </p>
            <div className="inform">
              <span className="font-bold">Type:</span>
              <p className="bg-green-400 w-[80px] rounded-[10px] text-center">
                Grass
              </p>
              <p className="bg-purple-400 w-[80px] rounded-[10px] text-center">
                Posion
              </p>
            </div>
          </div>
          <div className="md:row-start-4 p-[40px] bg-neutral-100">
            <p className="text-[20px] font-bold">Stats</p>
            <div>
              <div className="stats">
                {" "}
                <span>HP</span>
                <div className="w-full bg-gray-200 rounded-full h-3.5 dark:bg-gray-700">
                  <div className="bg-blue-600 h-3 rounded-full w-[30%]"></div>
                </div>
              </div>
              <div className="stats">
                {" "}
                <span>Attack</span>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div className="bg-blue-600 h-2.5 rounded-full w-[30%]"></div>
                </div>
              </div>
              <div className="stats">
                {" "}
                <span>Defense</span>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div className="bg-blue-600 h-2.5 rounded-full w-[30%]"></div>
                </div>
              </div>
              <div className="stats">
                {" "}
                <span>Speed</span>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div className="bg-blue-600 h-2.5 rounded-full w-[30%]"></div>
                </div>
              </div>
              <div className="stats">
                {" "}
                <span>Special Attack</span>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div className="bg-blue-600 h-2.5 rounded-full w-[30%]"></div>
                </div>
              </div>
              <div className="stats">
                {" "}
                <span>Special Defense</span>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div className="bg-blue-600 h-2.5 rounded-full w-[30%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // <div className="w-600px h-max bg-cyan-400 m-10 p-10">
  //   <div>
  //     <h1>
  //       {pokemonDetails &&
  //         pokemonDetails.name.replace(/^./, (str) => str.toUpperCase())}
  //     </h1>
  //   </div>
  //   <div>{<h1>Height: {height} m</h1>}</div>
  //   <div>
  //     {/* {pokemonDetails &&
  //       pokemonDetails.types.map((t) => {
  //         <h2>{t.name}</h2>;
  //       })} */}
  //   </div>
  //   <div>
  //     {pokemonDetails &&
  //       pokemonDetails.stats.map((s) => (
  //         <h1>
  //           {s.stat.name.replace(/^./, (str) => str.toUpperCase())} :
  //           {s.base_stat}
  //         </h1>
  //       ))}
  //   </div>
  // </div>
}

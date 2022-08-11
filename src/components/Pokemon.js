import React, { useEffect, useState } from "react";
import Pokedex from "./Pokedex";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./layout/Pokemon.css";
import TypeColor from "./Type_color";

export default function Pokemon({}) {
  const params = useParams();
  console.log(params);
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const [species, setSpecies] = useState(null);
  const getPokemondata = async () => {
    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${params.id}`
    );
    setPokemonDetails(res.data);
  };

  const getPokemonspecies = async () => {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon-species/${params.id}/`
    );
    setSpecies(response.data);
    console.log(response.data.flavor_text_entries[0].flavor_text);
  };

  useEffect(() => {
    getPokemondata();
    getPokemonspecies();
  }, [params]);

  return (
    <>
      {pokemonDetails ? (
        <div className="bg-neutral-100 p-[50px] flex align-items-center justify-center">
          <div className=" p-4 max-w-5xl grid gap-4 md:grid-cols-2   bg-slate-50 rounded-[40px]">
            <h1 className="xs-grid lg:column-star-1 md:row-start-1"></h1>
            <div className="text-4xl font-extrabold md:col-start-1 md:col-span-2 text-center">
              {pokemonDetails.name.replace(/^./, (str) => str.toUpperCase())}{" "}
              <span>#{pokemonDetails.id.toString().padStart(3, "0")}</span>
            </div>

            <div className="md:row-start-3 md:row-span-4">
              <img
                src={
                  pokemonDetails.sprites.other["official-artwork"].front_default
                }
                alt={pokemonDetails.name}
              ></img>
            </div>
            <div className="">
              <div className="md:row-start-3 p-[40px]">
                <p className="inform">
                  {species && species.flavor_text_entries[0].flavor_text}
                </p>
                <p className="inform">
                  <span className="font-bold">Height:</span>{" "}
                  {pokemonDetails.height / 10} m
                </p>
                <p className="inform">
                  <span className="font-bold">Weight:</span>{" "}
                  {pokemonDetails.weight} kg
                </p>
                <p className="inform">
                  <span className="font-bold">Abilities:</span>{" "}
                  {pokemonDetails.abilities.map((a) => (
                    <h1>
                      {a.ability.name.replace(/^./, (str) => str.toUpperCase())}
                    </h1>
                  ))}
                </p>
                <div className="inform ">
                  <span className="font-bold">Type:</span>
                  <div className="flex flex-row gap-4 pt-2">
                    {pokemonDetails.types.map((t) => (
                      <h2
                        className="p-[5px] pr-[10px] pl-[10px] rounded-[10px] border-2 border-black w-[80px] text-center"
                        style={{
                          backgroundColor: `${TypeColor[t.type.name]}`,
                        }}
                      >
                        {t.type.name.replace(/^./, (str) => str.toUpperCase())}
                      </h2>
                    ))}
                  </div>
                </div>
              </div>
              <div className="md:row-start-4 p-[40px] bg-neutral-100">
                <div>
                  <p className="text-[20px] font-bold">Stats</p>
                </div>
                <div>
                  <div className="stats">
                    {pokemonDetails.stats.map((s) => (
                      <div>
                        <h1>
                          {s.stat.name.replace(/^./, (str) =>
                            str.toUpperCase()
                          )}
                        </h1>
                        <div className="w-full bg-gray-200 rounded-full h-3.5 dark:bg-gray-700">
                          <div
                            className={`bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[${s.base_stat}%]`}
                          >
                            {s.base_stat}%
                          </div>
                        </div>
                      </div>
                    ))}{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading....</p>
      )}
    </>
  );
}

import axios from "axios";
import React, { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import Pokemon from "./Pokemon";
import { Link, Outlet } from "react-router-dom";
import Pagination from "./Pagination";

function Pokedex() {
  const [pokemons, setPokemons] = useState([]);
  const [nextPageUrl, setNextPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=50"
  );
  //const [prevPageUrl, setPrevPageUrl] = useState();
  // const [nextPageUrl, setNextPageUrl] = useState();
  const [loading, setLoading] = useState(true);
  const [SearchBar, setSearchBar] = useState("");

  const getPokemon = async () => {
    const res = await axios.get(nextPageUrl);
    setLoading(false);
    setNextPageUrl(res.data.next);
    //setNextPageUrl(res.data.next);
    res.data.results.forEach(async (pokemon) => {
      const poke = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
      );
      setPokemons((p) => [...p, poke.data]);
      // console.log(pokemons);
    });
  };
  useEffect(() => {
    setLoading(true);
    getPokemon();
  }, []);
  return (
    <div>
      <>
        <div className="ml-20 mr-20">
          {" "}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">
            {pokemons ? (
              pokemons.map((pokemon) => (
                <div>
                  <Link to={`/pokedex/${pokemon.id}`}></Link>

                  <PokemonCard
                    key={pokemon.index}
                    name={pokemon.name}
                    img={pokemon.sprites.other.dream_world.front_default}
                    id={pokemon.id}
                  />
                </div>
              ))
            ) : (
              <p>Loading pokemons</p>
            )}
          </div>
          <Outlet />
        </div>
      </>
    </div>
  );
}

/*function gotoNextPage() {
    setcurrentPageUrl(nextPageUrl);
  }*/

export default Pokedex;

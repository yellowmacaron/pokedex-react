import axios from "axios";
import React, { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import Pokemon from "./Pokemon";
import { Link, Outlet } from "react-router-dom";

function Pokedex() {
  const [pokemons, setPokemons] = useState([]);
  const [nextPageUrl, setNextPageUrl] = useState();

  const [loading, setLoading] = useState(true);
  const [SearchBar, setSearchBar] = useState("");
  const [favorite, setFavorite] = useState([]);

  const FavPoke = JSON.parse(localStorage.getItem("Fav"));
  const getPokemon = async () => {
    const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=20");
    setNextPageUrl(res.data.next);

    //setNextPageUrl(res.data.next);
    res.data.results.forEach(async (pokemon) => {
      const poke = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
      );
      setPokemons((p) => [...p, poke.data]);
      setLoading(false);
    });
  };
  const nextPage = async () => {
    setLoading(true);
    let res = await axios.get(nextPageUrl);
    setNextPageUrl(res.data.next);
    res.data.results.forEach(async (pokemon) => {
      const poke = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
      );
      setPokemons((p) => [...p, poke.data]);
      setLoading(false);
    });
  };
  useEffect(() => {
    setLoading(true);
    getPokemon();
    if (FavPoke == null) {
      setFavorite([]);
    } else {
      setFavorite(FavPoke);
    }
  }, []);

  const searchPokemonname = async (pokemon) => {
    const res = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    setPokemons();
  };
  const handleSearch = (e) => {
    setSearchBar(e.target.value);
  };

  const onClick = async (e) => {
    const data = await searchPokemonname(SearchBar);
    console.log(data);
  };

  //

  return (
    <div>
      <div className="flex justify-center align-items-center flex-row p-4 border-cyan-400">
        <div>
          <input placeholder="Search for Pokemon" onChange={handleSearch} />
        </div>
        <div>
          <button className="bg-cyan-400" onClick={onClick}>
            Search
          </button>
        </div>
      </div>
      <>
        <div className="ml-20 mr-20">
          {" "}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">
            {pokemons ? (
              pokemons.map((pokemon) => (
                <div>
                  <Link to={`/pokedex/${pokemon.id}`}></Link>
                  <PokemonCard
                    pokemon={pokemon.name}
                    key={pokemon.id}
                    name={pokemon.name}
                    img={pokemon.sprites.other.dream_world.front_default}
                    id={pokemon.id}
                    types={pokemon.types.map((type) => type.type.name)}
                    setFavorite={setFavorite}
                  />
                </div>
              ))
            ) : (
              <p>Loading pokemons</p>
            )}
          </div>
        </div>
      </>
      <div className="m-[20px] flex justify-center align-items-center">
        <button
          className="w-[100px] p-[5px] rounded-[15px] bg-cyan-400 hover:bg-sky-600 flex justify-center align-items-center font-bold text-white"
          onClick={nextPage}
        >
          {loading ? "Loading..." : "Load More"}
        </button>
      </div>
    </div>
  );
}

export default Pokedex;

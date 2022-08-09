import axios from "axios";
import React, { useEffect, useState } from "react";
import Cover from "./1085994.jpg";
import "./layout/Home.css";
function Home() {
  const [randomID, setRandomID] = useState([]);
  const [offset, setOffset] = useState(Math.floor(Math.random() * 1000));
  const [loading, setLoading] = useState(true);
  const generateNewId = () => {
    const id = Math.floor(Math.random() * 1000);
    setOffset(id);
  };
  const fetchAPI = async (offset) => {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/?limit=4&offset=${offset}`
    );
    response.data.results.forEach(async (pokemon) => {
      const pokename = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
      );
      setRandomID((p) => [...p, pokename.data]);
      console.log(pokename.data);
      setLoading(false);
    });
  };
  useEffect(() => {
    setLoading(true);
    fetchAPI();
    generateNewId();
  }, []);

  return (
    <div>
      {" "}
      <div className="hero-container">
        <h1 className="hero-text">POKEMON</h1>
      </div>
      <img src={Cover} alt="" />
      <div className="container-2">
        <div>
          <h1>About</h1>
        </div>
        <div>
          <button className="btn" onClick={fetch}>
            Suprise Me!
          </button>
        </div>
      </div>
      <div>
        {randomID.map((poke) => {
          <div>
            <h1>{poke.name}</h1>
            <img src={poke.sprites.other.dream_world.front_default} alt="" />
          </div>;
        })}
      </div>
    </div>
  );
}

export default Home;

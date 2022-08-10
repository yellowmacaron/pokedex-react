import axios from "axios";
import React, { useEffect, useState } from "react";
import Cover from "./1085994.jpg";
import text from "./thumb-1920-770462.png";
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
      <div className="hero-container parallax">
        <div className="hero-text ">
          <img src={text} />
        </div>
        {/* <h1 className="hero-text">POKEMON</h1> */}
        <div className>
          <img src={Cover} alt="" />
        </div>
      </div>
      <div className="featured-container">
        <div className=" p-4 max-w-5xl- grid gap-6 md:grid-cols-4">
          {/* <h1 className="xs:col-span-1 xs:grid xs:gap 4 md:col-span-3 text-4xl font-extrabold text-center pt-[20px]"></h1> */}
          <p class="text-4xl font-extrabold xs:row-start-2 xs:col-start-2 xs:self-center md:col-start-1 md:col-span-2">
            Featured Pokemon
          </p>
          {/* <div>
          <button className="btn" onClick={fetch}>
            Suprise Me!
          </button>
        </div> */}
          <div className="square bg-pink-400"></div>
          <div className="bg-sky-400 square"></div>
          <div className="bg-pink-400 square"></div>
          <div className="bg-sky-400 square"></div>
          <div className="bg-pink-400 square"></div>
          <div className="bg-sky-400 square"></div>
          <div className="bg-pink-400 square"></div>
          <div className="bg-sky-400 square"></div>
          <div>
            {randomID.map((poke) => {
              <div>
                <h1>Name: {poke.name}</h1>
                <img
                  src={poke.sprites.other.dream_world.front_default}
                  alt=""
                />
              </div>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

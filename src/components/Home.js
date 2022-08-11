import axios from "axios";
import React, { useEffect, useState } from "react";
import Cover from "./1085994.jpg";
import text from "./thumb-1920-770462.png";
import "./layout/Home.css";
import { Link } from "react-router-dom";
function Home() {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const idrandom = getRandomInt(0, 850);

  return (
    <div>
      <div className="hero-container">
        <div className="hero-text flex items-center justify-center flex-col">
          <img src={text} />
          <Link to={"/pokemon/" + idrandom}>
            <button className="h-10 px-5 m-2 text-white font-bold transition-colors duration-150 bg-amber-300 rounded-lg focus:shadow-outline hover:bg-amber-200">
              Suprise me!!
            </button>
          </Link>
        </div>
        {/* <h1 className="hero-text">POKEMON</h1> */}
        <div className="cover-img">
          <img className="h-[90vh] w-screen" src={Cover} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;

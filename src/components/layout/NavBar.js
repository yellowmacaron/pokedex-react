import React from "react";
import Home from "../Home";
import Pokedex from "../Pokedex";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="flex items-center justify-between flex-wrap bg-amber-300 p-4 h-[10vh]">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-extrabold text-xl tracking-tight">POKEDEX</span>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <div className="font-semibold text-[16px] block mt-4 lg:inline-block lg:mt-0 text-sky-500 hover:text-white mr-4">
            <Link to={"/"}>
              <h1>Home</h1>
            </Link>
          </div>
          <div className="font-semibold text-[16px] block mt-4 lg:inline-block lg:mt-0 text-sky-500 hover:text-white mr-4">
            <Link to={"/pokedex"}>
              <h1>Pokedex</h1>
            </Link>
          </div>
          <div className="font-semibold text-[16px] block mt-4 lg:inline-block lg:mt-0 text-sky-500 hover:text-white mr-4">
            <Link to={"/favorite"}>
              <h1>Favorites</h1>
            </Link>
          </div>
          <div className="font-semibold text-[16px] block mt-4 lg:inline-block lg:mt-0 text-sky-500 hover:text-white mr-4">
            <Link to={"/feedback"}>
              <h1>Feedback</h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NavBar;

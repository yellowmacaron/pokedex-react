import React from "react";
import Home from "../Home";
import Pokedex from "../Pokedex";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="w-screen h-[60px] z-10 bg-cyan-500 drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div>
          <div className="flex bg-blue-100 w-[1000px]">
            <h1 className="font-bold mr-4 sm:text-2xl">POKEDEX</h1>
            <div className="flex justify-end w-80">
              <Link to={"/home"}>
                <h1>Home</h1>
              </Link>
              <Link to={"/pokedex"}>
                <h1>Pokedex</h1>
              </Link>
            </div>
            <div>
              <Link to={"/favorite"}>
                <h1>Favorites</h1>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NavBar;

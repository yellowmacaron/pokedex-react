import React from "react";

function NavBar() {
  return (
    <div className="w-screen h-[60px] z-10 bg-cyan-500 drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div>
          <div className="flex items-center">
            <h1 className="font-bold mr-4 sm:text-2xl">POKEDEX</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NavBar;

import React, { useState } from "react";

export default function SearchBar(props) {
  let [SearchBar, setSearchBar] = useState("");
  const onChange = (e) => {
    setSearchBar = e.target.value;
  };
  const onClick = async (e) => {
    props.getPokemon(SearchBar);
    console.log(SearchBar);
  };

  return (
    <div className="flex justify-center align-items-center flex-row p-4 border-cyan-400">
      <div>
        <input placeholder="Search for Pokemon" onChange={onChange} />
      </div>
      <div>
        <button onClick={onClick} bg-cyan-400>
          Search
        </button>
      </div>
    </div>
  );
}

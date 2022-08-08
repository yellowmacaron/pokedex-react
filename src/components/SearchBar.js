import React, { useState } from "react";

export default function SearchBar() {
  let [SearchBar, setSearchBar] = useState("");
  const onChange = (e) => {
    setSearchBar = e.target.value;
  };

  const onClick = (e) => {
    console.log("search");
  };
  return (
    <div>
      <div>
        <input placeholder="Pokemon name..." onChange={onChange} />
      </div>
      <div>
        <button onClick={onClick}>Search</button>
      </div>
    </div>
  );
}

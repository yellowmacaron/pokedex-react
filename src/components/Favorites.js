import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Favorites() {
  const [favPoke, setFavePoke] = useState([]);

  const heartPoke = async (i) => {
    const res = await axios.get(`http://localhost:4000/results/`);
    setFavePoke(res.data);
    // res.data.forEach(async (i) => {
    //   for (let i = 0; i < 100; i++);
    //   const poke = await axios.get(`http://localhost:4000/results/${i}`);
    //   setFavePoke((p) => [...p, poke]);
    // });
  };
  useEffect(() => {
    heartPoke();
  }, []);
  return (
    <div>
      <h1>{favPoke.name}</h1>
    </div>
  );
}

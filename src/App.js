import "./App.css";
import NavBar from "./components/layout/NavBar";
import Pokedex from "./components/Pokedex";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Pokemon from "./components/Pokemon";

function App() {
  return (
    <div>
      {" "}
      <NavBar />
      <Pokedex />
    </div>
  );
}

export default App;

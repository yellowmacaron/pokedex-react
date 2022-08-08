import "./App.css";
import NavBar from "./components/layout/NavBar";
import Pokedex from "./components/Pokedex";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Pokemon from "./components/Pokemon";
import Home from "./components/Home";
import SearchBar from "./components/SearchBar";
function App() {
  return (
    <Router>
      <NavBar />
      <SearchBar />
      <Routes>
        {/* <Route path="" element={<Home />}></Route> */}
        <Route path="/pokedex" element={<Pokedex />}>
          <Route path="/pokedex/:pokemonID" element={<Pokemon />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

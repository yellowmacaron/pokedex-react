import "./App.css";
import NavBar from "./components/layout/NavBar";
import Pokedex from "./components/Pokedex";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Pokemon from "./components/Pokemon";
import Home from "./components/Home";
import Favorites from "./components/Favorites";
import Form from "./components/Form";
import Footer from "./components/layout/Footer";
function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/pokemon/:id" element={<Pokemon />} />
        <Route path="/favorite" element={<Favorites />}></Route>
        <Route path="/feedback" element={<Form />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

import Home from "./screens/Home.jsx";
import Nav from "./components/Nav.jsx";
import Cats from "./screens/Cats.jsx";
import DetailCat from "./screens/DetailCat.jsx";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cats" element={<Cats />} />
        <Route path="/cats/:id" element={<DetailCat />} />
      </Routes>
    </div>
  );
}

export default App;

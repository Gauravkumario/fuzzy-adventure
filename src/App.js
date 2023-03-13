import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import Home from "./Pages/Home";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Vans from "./Pages/Vans";
import VanDetail from "./Pages/VanDetail";

import "./server";

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to="/" className="logo-text">
          #VANLIFE
        </Link>
        <nav>
          <Link to="/about">About</Link>
          <Link to="/Vans">Vans</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Vans" element={<Vans />} />
        <Route path="/About" element={<About />} />
        <Route path="/vans/:id" element={<VanDetail />} />
      </Routes>
      <footer>Ⓒ 2022 #VANLIFE</footer>
    </BrowserRouter>
  );
}

export default App;

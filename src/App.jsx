import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Board from "./pages/Board";
import Produce from "./pages/Produce";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import WhereToBuy from "./pages/WhereToBuy";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/board" element={<Board />} />
      <Route path="/produce" element={<Produce />} />
      <Route path="/services" element={<Services />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/where-to-buy" element={<WhereToBuy />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;

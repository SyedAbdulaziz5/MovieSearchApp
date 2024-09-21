import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
import Pricing from "./pages/Pricing/Pricing";
import Contact from "./pages/Contact/Contact";
import Movies from "./pages/Movies/Movies";
import Bookmarks from "./pages/bookmarks/Bookmarks";
import Slider from "./components/slider/Slider";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="movie/:id" element={<MovieDetails />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/bookmarks" element={<Bookmarks />} />
      <Route path="/slider" element={<Slider />} />
    </Routes>
  );
};

export default AppRoutes;

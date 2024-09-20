import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import Pricing from "./components/Pricing/Pricing";
import Contact from "./components/Contact/Contact";
import Movies from "./components/Movies/Movies";
import Bookmarks from "./components/bookmarks/Bookmarks";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="movie/:id" element={<MovieDetails />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/bookmarks" element={<Bookmarks />} />{" "}
    </Routes>
  );
};

export default AppRoutes;

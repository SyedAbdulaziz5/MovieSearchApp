// MovieDetails.js
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { BASE_URL } from "../../Context";
import { FaBookmark } from "react-icons/fa6";
import { useContext } from "react";
import { AppContext } from "../../Context";

const MovieDetails = () => {
  const { id } = useParams();
  const { addBookmark } = useContext(AppContext);
  const [movie, setMovie] = useState({});

  const getMovies = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.Response === "True") {
        setMovie(data);
      }
    } catch (error) {
      console.log("Error fetching data", error);
    }
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      getMovies(`${BASE_URL}&i=${id}`);
    }, 500);

    return () => clearTimeout(timeOut);
  }, [id]);

  const handleBookmark = () => {
    addBookmark(movie);
  };

  return (
    <section className="movieDetails text-gray-400 bg-gray-900 body-font md:px-28">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center py-24">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full mb-10 flex justify-center">
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="object-cover object-center rounded-lg shadow-lg "
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 leading-8 flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="title-font sm:text-5xl text-3xl mb-4 font-medium text-white">
            {movie.Title}
          </h1>
          <div className="flex justify-between">
            <p className="text-[#e4d804]">{`${movie.Genre} -`}</p>
            <p className="text-white">{movie.Year}</p>
          </div>

          <p className="text-white">{movie.Director}</p>
          <p className="mb-8 leading-relaxed text-lg max-w-xl">{movie.Plot}</p>

          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button className="inline-flex tracking-widest text-white bg-[#12151E] border-2 border-[#e4d804] px-10 py-4 transition duration-300 hover:text-black font-bold hover:bg-[#e4d804] rounded-full text-sm">
              ▶ WATCH NOW
            </button>
            <button
              onClick={handleBookmark}
              className="bookmark inline-flex tracking-widest text-white bg-[#12151E] border-2 border-[#e4d804] px-4 py-4 transition duration-300 hover:text-black font-bold hover:bg-[#e4d804] rounded-full text-xl"
            >
              <FaBookmark />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieDetails;

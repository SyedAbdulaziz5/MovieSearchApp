import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import { IoIosStar } from "react-icons/io";

import "./heroSection.css";
const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
    )
      .then((res) => res.json())
      .then((data) => setPopularMovies(data.results));
  }, []);
  const firstWordStyle = {
    color: "#e4d804",
    fontWeight: "900",
    fontSize: "4rem",
    marginBottom: "0.4rem",
    textAlign: "left",
  };

  return (
    <>
      <div className="poster">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={3}
          infiniteLoop={true}
          showStatus={false}
        >
          {popularMovies.map((movie) => (
            <Link style={{ textDecoration: "none", color: "white" }}>
              <div className="posterImage">
                <img
                  src={`https://image.tmdb.org/t/p/original${
                    movie && movie.backdrop_path
                  }`}
                />
              </div>
              <div className="posterImage__overlay">
                <div className="posterImage__title">
                  <span style={firstWordStyle}>
                    {movie.original_title.split(" ")[0]}
                  </span>
                  {movie.original_title.split(" ").slice(1).join(" ")}
                </div>
                <div className="posterImage__runtime text-[#e4d804] flex">
                  {movie.release_date}
                  <span className="posterImage__rating flex">
                    {`${movie.vote_average}`}
                    <IoIosStar />
                  </span>
                </div>
                {/* <div className="posterImage__description">{movie.overview}</div> */}
              </div>
            </Link>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default Home;

import React, { useContext } from "react";
import { AppContext } from "../../Context";
import { FaTrash } from "react-icons/fa";

const Bookmarks = () => {
  const { bookmarks, removeBookmark } = useContext(AppContext);

  return (
    <div className="bookmark-container bg-gray-900">
      {/* <h1 className="flex justify-center text-4xl">Bookmarks</h1> */}
      {bookmarks.length > 0 ? (
        bookmarks.map((movie) => (
          <div
            key={movie.imdbID}
            className="bookmark-card w-full max-w-[18rem] mx-auto my-20 rounded-lg overflow-hidden bg-gray-800 md:mx-10"
          >
            <img
              className="bookmark-card-img w-full h-[26rem] object-cover transition-transform duration-300 ease-in-out hover:scale-105"
              src={movie.Poster}
              alt={movie.Title}
            />
            <h2 className="movie-title mt-4 text-base font-semibold text-white text-center">
              {movie.Title}
            </h2>
            <div className="movie-info flex justify-between py-2 px-4">
              <h2 className="year font-semibold text-[#e4d804]">
                {movie.Year}
              </h2>
              <button
                onClick={() => removeBookmark(movie.imdbID)}
                className="remove-btn text-white border-none transition duration-300 hover:text-red-600 font-bold rounded-full text-2xl"
              >
                <FaTrash />
              </button>
              <p className="quality font-semibold text-sm text-[#e4d804] border-2 border-white px-2">
                HD
              </p>
            </div>
          </div>
        ))
      ) : (
        <p className="text-white">No bookmarks yet!</p>
      )}
    </div>
  );
};

export default Bookmarks;

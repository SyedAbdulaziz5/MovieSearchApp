import React, { useEffect, useState } from "react";

const API_KEY = "727bbdc1";
export const BASE_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  const [query, setQuery] = useState("avengers");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  const getMovies = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.Response === "True") {
        setMovies(data.Search);
      }
    } catch (error) {
      console.log("Error fetching data", error);
    }
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (query) {
        getMovies(`${BASE_URL}&s=${query}`);
      }
    }, 500);

    return () => clearTimeout(timeOut);
  }, [query]);
  // +++++++++++++++++++++++++++++++++
  const addBookmark = (movie) => {
    setBookmarks((prevBookmarks) => {
      if (!prevBookmarks.find((item) => item.imdbID === movie.imdbID)) {
        return [...prevBookmarks, movie];
      }
      return prevBookmarks;
    });
  };

  const removeBookmark = (id) => {
    setBookmarks((prevBookmarks) =>
      prevBookmarks.filter((movie) => movie.imdbID !== id)
    );
  };
  // ++++++++++++++++++++++++++++++++++
  return (
    <AppContext.Provider
      value={{
        movies,
        setQuery,
        bookmarks,
        addBookmark,
        removeBookmark,
        isDarkMode,
        handleToggle,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };

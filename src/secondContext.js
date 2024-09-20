import React, { useState, useEffect, useContext } from "react";

const API_URL = `http://www.omdbapi.com/?apikey=727bbdc1&s=avengers`;

const UserContext = React.createContext();

const AppProvider = ({children}) => {
  const [movies, setMovies] = useState([]);

  const getMovies = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      if (data.Response === "True") {
        setMovies(data.Search);
      }
    } catch (error) {
      console.log("error");
    }
  };
  useEffect(() => {
    getMovies(API_URL);
  }, []);

  return <UserContext.Provider value={movies}>{children}</UserContext.Provider>;
};
export { AppProvider, UserContext };

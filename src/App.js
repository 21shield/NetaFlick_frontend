import React, { useState, useEffect } from "react";
import { loadPopMovies } from "./api/index";
import Movies from "./containers/Movies";
import Navbar from "./containers/Navbar";

import "./index.css";
function App() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    loadPopMovies().then((data) => {
      setMovies(data);
    });
  }, []);
  const setQueryMovies = (array) => {
    console.log("the return arr", array);
    setMovies(array);
  };

  // console.log(movies);
  return (
    <>
      <Navbar searchedMovies={setQueryMovies} />
      <Movies movies={movies} />
    </>
  );
}

export default App;

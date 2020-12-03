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
    setMovies([...array]);
  };

  // const updateMovie = (newMov) => {
  //   // update the array with new found info only the thumbs up and down
  //   console.log("made it back to app", newMov);
  //   let updatedMovies = movies.map((mov) => {
  //     if (Number(newMov.movieId) === mov.id) {
  //       mov.thumbs_down = newMov.thumbs_down;
  //       mov.thumbs_up = newMov.thumbs_up;
  //     } else {
  //       return mov;
  //     }
  //     return mov;
  //   });
  //   setMovies([...updatedMovies]);
  // };

  return (
    <>
      <Navbar searchedMovies={setQueryMovies} />
      <Movies movies={movies} />
    </>
  );
}

export default App;

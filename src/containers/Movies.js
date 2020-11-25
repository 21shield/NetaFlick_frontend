import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { loadPopMovies } from "../api/index";
import "../index.css";
export default function Movies() {
  // const arr = [1, 2, 3];
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    loadPopMovies().then((data) => {
      setMovies(data);
    });
  }, []);

  const renderMovies = () => {
    return movies.map((mov) => <MovieCard key={mov.id} {...mov} />);
  };
  console.log("this is the movies", movies);
  return <div className="moviesList">{renderMovies()}</div>;
}

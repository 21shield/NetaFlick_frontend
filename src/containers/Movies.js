import React from "react";
import MovieCard from "../components/MovieCard";
import "../index.css";
export default function Movies() {
  const arr = [1, 2, 3];
  const renderMovies = () => {
    return arr.map((mov) => <MovieCard />);
  };

  return <div className="moviesList">{renderMovies()}</div>;
}

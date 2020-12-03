import React from "react";
import MovieCard from "../components/MovieCard";
import "../index.css";

export default function Movies(props) {
  const renderMovies = () => {
    return props.movies.map((mov) => (
      <MovieCard key={mov.id} {...mov} updateMov={props.updateMov} />
    ));
  };
  return <div className="moviesList">{renderMovies()}</div>;
}

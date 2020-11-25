import React from "react";
import "../styles/movieCard.css";

const IMG_API = "https://image.tmdb.org/t/p/w500";

export default function MovieCard({
  title,
  poster_path,
  overview,
  vote_average,
}) {
  return (
    <div className="card">
      <img className="card-img" src={IMG_API + poster_path} alt={title} />
      <div class="container">
        <h4>
          <b>{title}</b>
          <span className="w3-tag">{vote_average}</span>
        </h4>
        <p>{overview}</p>
      </div>
    </div>
  );
}

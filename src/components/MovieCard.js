import React from "react";
import "../styles/movieCard.css";

export default function MovieCard() {
  return (
    <div className="card">
      <img src="img_avatar.png" alt="Avatar" />
      <div class="container">
        <h4>
          <b>John Doe</b>
        </h4>
        <p>Architect & Engineer</p>
      </div>
    </div>
  );
}

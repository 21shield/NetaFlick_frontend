import React, { useState } from "react";
import CardBack from "./CardBack";
import "../styles/movieCard.css";

const IMG_API = "https://image.tmdb.org/t/p/w500";

export default function MovieCard({
  title,
  poster_path,
  overview,
  vote_average,
  release_date,
  id,
  // updateMov,
  // thumbs_up,
  // thumbs_down,
}) {
  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(!show);
  };
  const closeModal = () => {
    setShow(!show);
  };
  return (
    <>
      {show ? (
        <CardBack
          show={show}
          closeModal={closeModal}
          release
          data={{ release_date, overview, title, id }}
          // updateMov={updateMov}
        />
      ) : (
        <div className="card" onClick={showModal}>
          <img className="card-img" src={IMG_API + poster_path} alt={title} />
          <div className="container">
            {/* <i
              className="fas fa-play play_button"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Play Trailer"
            ></i> */}
            <h3>
              <b>{title}</b>
              <span className="w3-tag">{vote_average}</span>
            </h3>
          </div>
        </div>
      )}
    </>
  );
}

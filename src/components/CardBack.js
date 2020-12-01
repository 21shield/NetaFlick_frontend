import React, { useState } from "react";
import { updateMovie } from "../api";
import "../styles/cardback.css";

export default function CardBack(props) {
  const { title, overview, release_date, id } = props.data;
  const { closeModal } = props;
  // const [btn, setBtn] = useState();
  const updateVote = (e) => {
    console.log(e.target.value);
    updateMovie(id, e.target.value).then((data) => {
      console.log("FROMT THE BACK", data);
    });
  };

  return (
    <div className="cardback-wrapper">
      <div className="cardback-header">
        <h3>{title}</h3>
        <span className="close-btn" onClick={closeModal}>
          <i className="fa fa-undo" aria-hidden="true"></i>
        </span>
      </div>
      <hr />
      <div className="back-container">
        <h3>Overview: </h3>

        <p>{overview}</p>
        <p>
          Release Date:
          <span> {release_date} </span>
        </p>
      </div>
      <div className="card-footer">
        <div className="upBtn">
          <button value={true} onClick={updateVote}>
            <i className="far fa-arrow-alt-circle-up vote"></i>
          </button>
        </div>

        <div className="dwnBtn">
          <button value={false} onClick={updateVote}>
            <i
              className="fa fa-arrow-circle-o-down vote"
              aria-hidden="true"
            ></i>
          </button>
        </div>
      </div>
    </div>
  );
}

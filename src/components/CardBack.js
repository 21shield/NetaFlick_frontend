import React, { useState, useEffect } from "react";
import { updateMovie, renderMovie } from "../api";
import "../styles/cardback.css";

export default function CardBack(props) {
  const [currentMovie, setCurrentMovie] = useState({});
  const { title, overview, release_date, id } = props.data;
  const { closeModal } = props;
  const updateVote = (e) => {
    updateMovie(id, e.target.value).then((data) => {
      // props.updateMov(data.movie);
      console.log("FROM THE UPDATE", data);
    });
  };

  useEffect(() => {
    renderMovie(id).then((data) => {
      console.log("RENDERED ON LOAD", data);
    });
  }, [id]);

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
          {/* <div className="votesNum"> {thumbs_up}</div> */}
        </div>

        <div className="dwnBtn">
          <button value={false} onClick={updateVote}>
            <i
              className="fa fa-arrow-circle-o-down vote"
              aria-hidden="true"
            ></i>
          </button>
          {/* <div className="votesNum"> {thumbs_up}</div> */}
        </div>
      </div>
    </div>
  );
}

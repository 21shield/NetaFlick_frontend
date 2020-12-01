import React from "react";
import "../styles/cardback.css";

export default function Modal(props) {
  const { title, overview, release_date } = props.data;
  const { closeModal } = props;

  return (
    <div className="cardback-wrapper">
      <div className="cardback-header">
        <h3>{title}</h3>
        <span className="close-btn" onClick={closeModal}>
          <i class="fa fa-undo" aria-hidden="true"></i>
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
          <button>
            <i className="far fa-arrow-alt-circle-up"></i>
          </button>
        </div>

        <div className="dwnBtn">
          <button onClick={() => closeModal()}></button>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import "../styles/cardback.css";

export default function Modal(props) {
  const { title, overview, release_date } = props.data;
  const { closeModal } = props;
  console.log(title);

  return (
    <div className="cardback-wrapper">
      <div className="cardback-header">
        <h3>{title}</h3>
        <span className="close-btn" onClick={closeModal}>
          X
        </span>
        <h5>
          Release Date:
          <span> {release_date} </span>
        </h5>
      </div>
      <hr />
      <div className="back-container">
        <strong>Overview: </strong>

        <p>{overview}</p>
      </div>
      <div className="card-footer">
        <button>
          <i className="far fa-arrow-alt-circle-up"></i> 0
        </button>
        <button onClick={() => closeModal()}>
          <i className="fa fa-arrow-alt-circle-down"></i> 0
        </button>
      </div>
    </div>
  );
}

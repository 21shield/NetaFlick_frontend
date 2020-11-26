import React from "react";
import "../styles/cardback.css";

export default function Modal(props) {
  const { title, overview, release_date } = props.data;
  const { closeModal } = props;
  console.log(title);

  return (
    <div className="cardback-wrapper">
      <div className="cardback-header">
        <p>{title}</p> <span>{release_date}</span>
        <span className="close-btn" onClick={closeModal}>
          CLOSE
        </span>
      </div>
      <div className="back-container">
        <strong>Overview: </strong>

        <p>{overview}</p>
      </div>
      <div className="Card-footer">
        <button>
          <i className="far fa-arrow-alt-circle-up"></i>
        </button>
        <button onClick={() => closeModal()}>
          <i className="fa fa-arrow-alt-circle-down"></i>
        </button>
      </div>
    </div>
  );
}

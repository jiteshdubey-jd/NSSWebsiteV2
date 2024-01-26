import React from "react";
import "../styles/Testimonial-modal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

export default function Modal({ onClose, testimony, image, name, year, post }) {
  return (
    <div className={`modal-overlay ${testimony ? "active" : ""}`}>
      <div className="modal">
        <span className="modal-close-button" onClick={onClose}>
          <FontAwesomeIcon icon={faClose} />
        </span>
        <div className="modal-content">
          <div className="every-details">
            <div className="image">
              <img
                src={image}
                alt="Testimony"
                className="modal-image"
                loading="lazy"
              />
            </div>

            <div className="details">
              <h1 className="name">{name}</h1>
              <p>{post}</p>
              <p>{year}</p>
            </div>
          </div>
          <p>{testimony}</p>
        </div>
      </div>
    </div>
  );
}

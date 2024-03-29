import React from "react";
import { useEffect } from "react";
import "../styles/modal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const Modal = ({ show, onClose, children }) => {
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [show]);

  if (!show) {
    return null;
  }

  return (
    <div className="modalWrapper">
      <div className="modal_Council">
        <button className="btnClose" onClick={onClose}>
          <FontAwesomeIcon icon={faClose} />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;

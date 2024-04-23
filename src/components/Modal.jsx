import React from "react";

export const Modal = ({ onClose }) => {
  const handleClose = () => {
    onClose();
  };

  const handleModalClick = (e) => {
    // Evita que el clic se propague al contenido del modal y lo cierre
    e.stopPropagation();
  };
  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={handleModalClick}>
        <button className="close-button" onClick={handleClose}>
          Cerrar
        </button>
        <h1>kmkmklklms</h1>
      </div>
    </div>
  );
};

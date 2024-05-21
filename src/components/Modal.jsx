import React from "react";

export const Modal = ({ onClose,data }) => {
  const handleWhatsAppClick = () => {
    // Abrir la aplicación de WhatsApp con el número de teléfono
    window.open(`https://api.whatsapp.com/send?phone=${data.phone}`);
  };
  const handleClose = () => {
    onClose();
  };

  const handleModalClick = (e) => {
    // Evita que el clic se propague al contenido del modal y lo cierre
    e.stopPropagation();
  };
  return (
    <div className="modal-p" onClick={handleClose}>
      <div className="modal-content" onClick={handleModalClick}>
        <button className="close-button" onClick={handleClose}>
          Cerrar
        </button>
        <h1>{data.name}</h1>
        <h2><a href={`tel:${data.phone}`} onClick={handleWhatsAppClick}>{data.phone}</a></h2>
        <p>{data.skills}</p>
      </div>
    </div>
  );
};

import { useState } from "react";
import { Modal } from "./Modal";

export const ResultsChildProfession = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="card-container">
        {data ? (
          data.map((data, index) => (
            <div onClick={openModal} className="card">
              <img src={data.image} alt={data.name} />
              <div className="card-body">
                <h5 className="card-title">{data.name}</h5>
                <p className="card-text">Teléfono: {data.phone}</p>
                <p className="card-text">Profesión: {data.skills}</p>
              </div>
            </div>
          ))
        ) : (
          <div>
            <h3>Sin Resultados</h3>
          </div>
        )}
      </div>
      {isModalOpen&&(<div><Modal onClose={closeModal} data={data}/></div>)}
    </>
  );
};

export const ResultsChildProfession = ({ data }) => {
  return (
    <div className="card-container">
      {data ? (
        data.map((d, i) => (
          <div className="card">
            <img src={d.image} alt={d.name} />
            <div className="card-body">
              <h5 className="card-title">{d.name}</h5>
              <p className="card-text">Teléfono: {d.phone}</p>
              <p className="card-text">Profesión: {d.skills}</p>
            </div>
          </div>
          // <div
          //   key={`${d.name}-${i}`}
          //   className="col-md-3 col-sm-6 team"
          //   id="Results"
          // >
          //   <div className="thumbnail">
          //     {" "}
          //     <div className="caption">
          //       <h4>{d.name}</h4>
          //       <p>{d.phone}</p>
          //     </div>
          //   </div>
          // </div>
        ))
      ) : (
        <div>
          <h3>Sin Resultados</h3>
        </div>
      )}
    </div>
  );
};

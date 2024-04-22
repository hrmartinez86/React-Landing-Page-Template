export const ResultsChildProfession = ({ data }) => {
  return (
    <div>
      {data ? (
        data.map((d, i) => (
          <div
            key={`${d.name}-${i}`}
            className="col-md-3 col-sm-6 team"
            id="Results"
          >
            <div className="thumbnail">
              {" "}
              <div className="caption">
                <h4>{d.name}</h4>
                <p>{d.phone}</p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div>
          <h3>Sin Resultados</h3>
        </div>
      )}
    </div>
  );
};

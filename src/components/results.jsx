export const Results = ({ data }) => {
  return (
    <div>
      <h1>
        {data?console.log(data):console.log("vacio")}
        {data
          ? data.map((d, i) => (
              <div
                key={`${d.name}-${i}`}
                className="col-md-3 col-sm-6 team"
                id="Results"
              >
                <div className="thumbnail">
                  {" "}
                  <img src={d.img} alt="..." className="team-img" />
                  <div className="caption">
                    <h4>{d.name}</h4>
                    <p>{d.description}</p>
                  </div>
                </div>
              </div>
            ))
          : <div><h3>Sin Resultados</h3></div>}
      </h1>
    </div>
  );
};

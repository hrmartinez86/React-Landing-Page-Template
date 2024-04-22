export const Results = ({ data, onOptionClick }) => {
  const handleClick = (option) => {
    onOptionClick(option);
  };
  return (
    <div id="results" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title"></div>
        <div className="row">
          {data
            ? data.map((d, i) => (
                <div
                  key={`${d.name}-${i}`}
                  onClick={() => handleClick(d.id)}
                  className="col-xs-6 col-md-3"
                >
                  <i class={d.icon ? d.icon : "bx bx-universal-access"}></i>
                  <h3>{d.name}</h3>
                  <p>{d.description}</p>
                </div>
              ))
            : "Loading ...."}
        </div>
      </div>
    </div>
  );
};
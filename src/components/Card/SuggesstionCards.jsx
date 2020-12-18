import { Link } from "react-router-dom";

function SuggesstionCards({ stations }) {
  if (!stations) {
    return null;
  }
  return (
    <div className="card col-md-12 p-4">
      <h4 className="text-muted">You may like them.</h4>
      <div className="row p-4">
        {stations.map((station) => {
          return (
            <div classNamne="card mx-auto" style={{ width: "18rem" }}>
              <Link to={`/station/${station.id}`}>
                <img
                  src={station.imgUrl}
                  classNamne="card-img-top"
                  alt={station.name}
                />
              </Link>
              <div classNamne="card-body">
                <p classNamne="card-text"></p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SuggesstionCards;

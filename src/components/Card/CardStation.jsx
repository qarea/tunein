import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Tags from "./Tags";
import Button from "../Button/DefaultButton";

function CardStation({ station }) {
  return (
    <div className="col-6 mx-auto card mb-2">
      <div className="row g-0">
        <div className="col-md-4 d-flex align-items-center">
          <Link to={`/station/${station.id}`}>
            <img
              className="card-img-top img-thumbnail"
              src={station.imgUrl}
              alt={station.name}
            />
          </Link>
        </div>

        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{station.name}</h5>
            <p className="card-text">
              <Tags tags={station.tags} path="/" />
            </p>
            <p className="d-flex justify-content-between">
              <Button type="button" className="btn btn-primary">
                <span className="font-weight-bold">reliability </span>
                <span className="badge badge-light">{station.reliability}</span>
              </Button>

              <Button type="button" className="btn btn-info">
                <span className="font-weight-bold">popularity </span>
                <span className="badge badge-light">{station.popularity}</span>
              </Button>
            </p>
            <Link to={`/station/${station.id}`} className="btn btn-success">
              Play
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

CardStation.propTypes = {
  station: PropTypes.object.isRequired,
};

export default CardStation;

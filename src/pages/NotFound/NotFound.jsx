import { Link } from "react-router-dom";

function NotFound(props) {
  return (
    <div className="col-12">
      <h2 className="text-danger">Page not found.</h2>
      <Link to="/">See Stations</Link>
    </div>
  );
}

export default NotFound;

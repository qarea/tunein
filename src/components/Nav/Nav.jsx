import { NavLink } from "react-router-dom";

function Nav(props) {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item" aria-current="page">
          <NavLink to="/" activeClassName="active">
            Stations
          </NavLink>
        </li>
      </ol>
    </nav>
  );
}

export default Nav;

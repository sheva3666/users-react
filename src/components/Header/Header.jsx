import { Link } from "react-router-dom";
import "./Header.css";
import { StaticRoutes } from "../../routes";

const Header = () => {
  return (
    <div className="header">
      <h2>UsersLogo</h2>
      <div className="header_nav">
        <Link className="header_nav-link" to={StaticRoutes.home}>
          Home
        </Link>
        <Link className="header_nav-link" to={StaticRoutes.registration}>
          Registration
        </Link>
        <Link className="header_nav-link" to={StaticRoutes.follows}>
          Follows
        </Link>
      </div>
    </div>
  );
};

export default Header;

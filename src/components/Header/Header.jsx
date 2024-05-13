import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <h2>UsersLogo</h2>
      <div className="header_nav">
        <Link className="header_nav-link" to={"/"}>
          Home
        </Link>
        <Link className="header_nav-link" to={"registration"}>
          Registration
        </Link>
      </div>
    </div>
  );
};

export default Header;

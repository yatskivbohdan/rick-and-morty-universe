import "./Header.scss";
import { Link } from "react-router-dom";
import Search from "../Search";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";

const Header = () => {
  return (
    <div className="Header">
      <Link to="/">
        <Logo className="Header__logo"></Logo>
      </Link>
      <Link className="Header__link" to="/">
        <Search className="header" />
      </Link>
    </div>
  );
};

export default Header;

import "./Header.scss";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { quotes } from "../../utils";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";

const Header = () => {
  const [currentQuote, setCurrentQuote] = useState(quotes[Math.floor(Math.random() * quotes.length)]);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    }, 30000);

    return () => clearInterval(interval);
  });

  return (
    <div className="Header">
      <Link to="/">
        <Logo className="Header__logo"></Logo>
      </Link>
      <div className="Header__quote">“{currentQuote}”</div>
    </div>
  );
};

export default Header;

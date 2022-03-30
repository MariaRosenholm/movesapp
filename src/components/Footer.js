import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faPlusSquare,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footerwrapper">
      <Link to="/movesapp/">
        <FontAwesomeIcon icon={faHome} className="footericon" />
      </Link>
      <Link to="/movesapp/new">
        <FontAwesomeIcon icon={faPlusSquare} className="footericon" />
      </Link>
      <Link to="/movesapp/search">
        <FontAwesomeIcon icon={faSearch} className="footericon" />
      </Link>
    </div>
  );
};

export default Footer;

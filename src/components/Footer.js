import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPlusSquare, faSearch } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";


const Footer = () => {
  return (
    <div className="footerwrapper">
      <Link to="/"><FontAwesomeIcon icon={faHome} className="footericon"/></Link>
      <Link to="/new"><FontAwesomeIcon icon={faPlusSquare} className="footericon"/></Link>
      <Link to="/search"><FontAwesomeIcon icon={faSearch} className="footericon"/></Link>
    </div>
  );
};

export default Footer;

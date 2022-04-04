import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Support = () => {
  return (
    <div className="main-area-front">
      <div className="informationAndSupportWrapper">
        <h2>If you face any problems using Moves it please contact us by</h2>
        <h2>
          <a
            className="links"
            href="https://www.linkedin.com/in/mariarosenholm/"
          >
            LinkendIn message
          </a>{" "}
        </h2>
        <h2>
          <a className="links" href="https://www.instagram.com/m1ss.maria/">
            {" "}
            Instagram DM <FontAwesomeIcon icon={faInstagram} />
          </a>
        </h2>
      </div>
    </div>
  );
};

export default Support;

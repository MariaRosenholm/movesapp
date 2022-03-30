import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const ListItem = ({ move, creator, Id, link }) => {
  return (
    <div className="ListItem">
      <Link to={"/movesapp/moves/" + Id}>
        <p>
          {move} by {creator}{" "}
          <span className="insta-span">
            {link === "" || !link ? (
              ""
            ) : (
              <FontAwesomeIcon icon={faInstagram} className="insta" />
            )}
          </span>
        </p>
      </Link>
    </div>
  );
};

export default ListItem;

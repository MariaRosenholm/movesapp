import React from "react";
import { Link } from "react-router-dom";

const ListItem = ({ move, creator, Id }) => {
  return (
    <div className="ListItem">
      <Link to={"/moves/" + Id}>
        <p>
          {move} by {creator}
        </p>
      </Link>
    </div>
  );
};

export default ListItem;

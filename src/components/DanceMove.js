import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";



const DanceMove = ({ dancelist }) => {
  const params = useParams();
  let move = dancelist.find((move) => move.Id === +params.id);
  console.log("move", move)

  return (
    <div className="DanceMove">
      <div id="header"></div>
      <h3>{move?.Move}</h3>
      <h3>{move?.Creator}</h3>
      <p>{move?.HOX}</p>
      <p id="IG">{move?.Link}</p>
      <Link to={"/edit/" + params.id}>

        <button>edit</button>

      </Link>
    </div>
  );
};

export default DanceMove;

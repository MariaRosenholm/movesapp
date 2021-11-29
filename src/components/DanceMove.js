import React from "react";
import { useParams } from "react-router-dom";

const DanceMove = ({ dancelist }) => {
  const params = useParams();
  let move = dancelist.find((move) => move.Id === +params.id);

  return (
    <div className="DanceMove">
      <div id="header"></div>
      <h3>{move?.Move}</h3>
      <h3>{move?.Creator}</h3>
      <p>{move?.HOX}</p>
      <p id="IG">{move?.Link}</p>
    </div>
  );
};

export default DanceMove;

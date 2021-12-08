import React from "react";
import { useParams } from "react-router-dom";

const DanceMove = ({ dancelist }) => {
  const params = useParams();
  let move = dancelist.find((move) => move.Id === +params.id);

  let notes;
  let text;

  if (!move?.HOX) {
    notes = "";
  } else {
    text = "Notes: ";
    notes = move?.HOX;
  }

  return (
    <div className="DanceMove">
      <h3>{move?.Move}</h3>
      <p>by</p>
      <h3>{move?.Creator}</h3>
      <div id="notesAndIGWrapper">
        <p>
          {text}
          <span>{notes}</span>
        </p>
        <p id="IG">{move?.Link}</p>
      </div>
    </div>
  );
};

export default DanceMove;

import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenSquare } from "@fortawesome/free-solid-svg-icons";

const DanceMove = ({ dancelist }) => {
  const params = useParams();
  let move = dancelist.find((move) => move.Id === +params.id);

  let notes;
  let notesText;
  let linkText;
  let link;

  if (!move?.HOX) {
    notes = "";
  } else {
    notesText = "Notes: ";
    notes = move?.HOX;
  }

  if (!move?.Link) {
    link = "";
  } else {
    linkText = "Click to Instagram video!";
    link = move?.Link;
  }

  return (
    <div className="DanceMove">
      <div id="header"></div>
      <Link to={"/edit/" + params.id} className="squre-pen-wrapper">
        <FontAwesomeIcon icon={faPenSquare} className="squre-pen" />

        {/*  <button>edit</button> */}
      </Link>

      <h3>{move?.Move}</h3>
      <p>by</p>
      <h3>{move?.Creator}</h3>

      <div id="notesAndIGWrapper">
        <p>
          {notesText}
          <span>{notes}</span>
        </p>
        <a href={link} target="_blank" rel="noreferrer noopener" id="IG">
          {linkText}
        </a>
      </div>
    </div>
  );
};

export default DanceMove;

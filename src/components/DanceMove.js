import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import Loader from "./Loader";
import InstagramEmbed from "react-instagram-embed";

function DanceMove({ dancelist }) {
  const [isLoading, setIsLoading] = useState();
  const [notes, setNotes] = useState();
  const [by, setBy] = useState();
  const params = useParams();

  let move = dancelist.find((move) => move.Id === +params.id);
  let link = move?.Link;

  useEffect(() => {
    move?.HOX ? setNotes(move.HOX) : setNotes("No notes added");
    !link ? setIsLoading(false) : setIsLoading(true);
    move?.Creator ? setBy(true) : setBy(false);
  }, [link, move?.HOX, move?.Creator]);

  return (
    <div className="DanceMove">
      <Link to={"/edit/" + params.id} className="squre-pen-wrapper">
        <FontAwesomeIcon icon={faEdit} className="squre-pen" />
      </Link>
      <div className="nameAndCreator">
        <h3 className="moveName">{move?.Move}</h3>
        {by && <p>by</p>}
        <h3>{move?.Creator}</h3>
      </div>
      <p className="notes">
        <span>{notes}</span>
      </p>
      {isLoading && <Loader />}


      {!link && <div id="notesAndIGWrapper"><p>No instagram video added!</p> </div>}

      {link && (
        <InstagramEmbed
          url={link}
          clientAccessToken={process.env.REACT_APP_access_token}
          maxWidth={320}
          hideCaption={true}
          containerTagName="div"
          protocol=""
          injectScript
          onLoading={() => { }}
          onSuccess={() => {
            setIsLoading(false);
          }}
          onAfterRender={() => { }}
          onFailure={() => { }}
        />
      )}


    </div>
  );
}

export default DanceMove;

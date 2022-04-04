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
  const params = useParams();

  let move = dancelist.find((move) => move.Id === +params.id);
  let link = move?.Link;

  useEffect(() => {
    move?.HOX ? setNotes(move.HOX) : setNotes("No notes added.");
    !link ? setIsLoading(false) : setIsLoading(true);
  }, [link, move?.HOX]);

  return (
    <div className="DanceMove">
      <Link to={"/edit/" + params.id} className="squre-pen-wrapper">
        <FontAwesomeIcon icon={faEdit} className="squre-pen" />
      </Link>

      <h3>{move?.Move}</h3>
      <p>by</p>
      <h3>{move?.Creator}</h3>

      <div id="notesAndIGWrapper">
        <p>
          <span>{notes}</span>
        </p>
        {!link && <h3>No instagram video added!</h3>}
        {isLoading && <Loader />}
        {link && (
          <InstagramEmbed
            url={link}
            clientAccessToken={process.env.REACT_APP_access_token}
            maxWidth={320}
            hideCaption={true}
            containerTagName="div"
            protocol=""
            injectScript
            onLoading={() => {}}
            onSuccess={() => {
              setIsLoading(false);
            }}
            onAfterRender={() => {}}
            onFailure={() => {
              <h3>Instagram video cannot be shown!</h3>;
            }}
          />
        )}
      </div>
    </div>
  );
}

export default DanceMove;

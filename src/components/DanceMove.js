import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
// import { useState, useEffect } from "react";
// import Loader from "./Loader";
import InstagramEmbed from "react-instagram-embed";

function DanceMove({ dancelist }) {
  // const [isLoading, setIsLoading] = useState(true);
  const params = useParams();

  let move = dancelist.find((move) => move.Id === +params.id);
  let link = move?.Link;
  let notes;
  let notesText;

  /* useEffect(() => {
    if (link) {
    } else {
      setIsLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); */

  if (!move?.HOX) {
    notesText = "No notes added.";
  } else {
    notesText = "Notes: ";
    notes = move?.HOX;
  }

  return (
    <div className="DanceMove">
      <Link to={"/edit/" + params.id} className="squre-pen-wrapper">
        <FontAwesomeIcon icon={faEdit} className="squre-pen" />
      </Link>

      <h3 id="dance-move-header">{move?.Move}</h3>
      <p id="dance-move-p">by</p>
      <h3 id="dance-move-header">{move?.Creator}</h3>

      <div id="notesAndIGWrapper">
        <p id="dance-move-p">
          {notesText}
          <span>{notes}</span>
        </p>
        {/* isLoading && <Loader /> */}
        {
          /*!isLoading && */ <a
            href={link}
            target="_blank"
            rel="noreferrer noopener"
            id="IG"
          >
            <InstagramEmbed
              url={link}
              clientAccessToken={process.env.REACT_APP_access_token}
              maxWidth={320}
              hideCaption={false}
              containerTagName="div"
              protocol=""
              injectScript
              onLoading={() => { }}
              onSuccess={() => { }}
              onAfterRender={() => { }}
              onFailure={() => { }}
            />
          </a>
        }
      </div>
    </div>
  );
}

export default DanceMove;

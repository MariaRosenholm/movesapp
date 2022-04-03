import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import parse from "html-react-parser";
import Loader from "./Loader";

function DanceMove({ dancelist }) {
  const [isLoading, setIsLoading] = useState(true);
  const [videoOrText, setVideoOrText] = useState("No Instagram link added.");
  const params = useParams();

  let move = dancelist.find((move) => move.Id === +params.id);
  let link = move?.Link;
  let notes;
  let notesText;

  useEffect(() => {
    if (link) {
      getVideo(link);
    } else {
      setIsLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function getVideo(link) {
    window.FB.api(
      "/instagram_oembed",
      "GET",
      {
        url: link,
        access_token: process.env.REACT_APP_access_token,
      },
      function (response) {
        console.log(response);
        console.log("This is response.html: " + response.html);
        response.html !== undefined
          ? setVideoOrText(response.html)
          : setVideoOrText("Given url is not working!");
        setIsLoading(false);
      }
    );
  }

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

      <h3>{move?.Move}</h3>
      <p>by</p>
      <h3>{move?.Creator}</h3>

      <div id="notesAndIGWrapper">
        <p>
          {notesText}
          <span>{notes}</span>
        </p>
        {isLoading && <Loader />}
        {!isLoading && (
          <a href={link} target="_blank" rel="noreferrer noopener" id="IG">
            {parse(`${videoOrText}`)}
          </a>
        )}
      </div>
    </div>
  );
}

export default DanceMove;

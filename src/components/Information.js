import React from "react";

const Information = () => {
  return (
    <div className="main-area-front">
      <div className="informationAndSupportWrapper">
        <p className="information">
          Moves It is an application for storing information about dancers and
          their dance moves. This application is built for a specific dance
          group to help them keep track of which dance moves they are familiar
          with, and to be able to credit the original creators of the dance
          moves/steps when they are using them in their choreographies.
        </p>

        <h2>
          {" "}
          More information about the code in{" "}
          <a className="links" href="https://github.com/MariaRosenholm/movesit">
            GitHub
          </a>
        </h2>
      </div>
    </div>
  );
};

export default Information;

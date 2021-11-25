import React from "react";

const DanceMoveCard = (props) => {
  let info = "notes";
  let IG = "Instagram link";

  if (props.info) {
    info = props.info;
  }
  if (props.link) {
    IG = props.link;
  }
  return (
    <div className="danceMovePage">
      <div id="header"></div>
      <h3>{props.move}</h3>
      <h3>{props.creator}</h3>
      <p>{info}</p>
      <p id="IG">{IG}</p>
    </div>
  );
};

export default DanceMoveCard;

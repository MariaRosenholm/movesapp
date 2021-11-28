import React from "react";

const DanceMove = ({ listItemId, dancelist }) => {
  let danceMoveInfo = dancelist.filter((id) => {
    let result;

    if (id.Id === listItemId) {
      result = id;
    }
    return result;
  });

  return danceMoveInfo.map((c) => (
    <div className="DanceMove">
      <div id="header"></div>
      <h3>{c.Move}</h3>
      <h3>{c.Creator}</h3>
      <p>{c.HOX}</p>
      <p id="IG">{c.Link}</p>
    </div>
  ));
};

export default DanceMove;

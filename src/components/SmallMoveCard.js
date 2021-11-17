import React from "react";

const Card = (props) => {
  return (
    <div className="smallMoveCard" onClick={props.moveCard}>
      <p>
        {props.move} by {props.creator}
      </p>
    </div>
  );
};

export default Card;

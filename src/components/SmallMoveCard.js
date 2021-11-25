import React from "react";
const Card = (props) => {
  return (
    <div className="smallMoveCard" onClick={() => props.showMove(props.move)}>
      <p>
        {props.move} by {props.creator}
      </p>
    </div>
  );
};

export default Card;

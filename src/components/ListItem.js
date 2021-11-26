import React from "react";
const ListItem = (props) => {
  return (
    <div className="ListItem" onClick={() => props.showMove(props.move)}>
      <p>
        {props.move} by {props.creator}
      </p>
    </div>
  );
};

export default ListItem;

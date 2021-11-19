import React from "react";

const EditMove = () => {
  return (
    <div className="editmove">
      <h3>Edit Move</h3>
      <form className="editmove-wrapper">
        <label>
          EDIT move name
          <input type="text" />
        </label>
        <label>
          ADD/EDIT creator name
          <input type="text" />
        </label>
        <label>
          ADD/EDIT notes
          <input type="text" />
        </label>

        <label>
          ADD/EDIT instagram link
          <input type="text" />
        </label>
        <button type="button">SAVE CHANGES</button>
      </form>
    </div>
  );
};

export default EditMove;

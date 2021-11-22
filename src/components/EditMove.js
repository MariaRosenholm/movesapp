import React from "react";

const EditMove = () => {
  return (
    <div className="editmove">
      <div className="editmove_header_wrapper">
        <h1>Edit Move</h1>
      </div>
      <form className="editmove-wrapper">
        <label>
          <input
            type="text"
            placeholder="EDIT move name"
            className="edit_move_input"
          />
        </label>
        <label>
          <input
            type="text"
            placeholder="ADD/EDIT creator name"
            className="edit_move_input"
          />
        </label>
        <label>
          <input
            type="text"
            placeholder=" ADD/EDIT notes"
            className="add_note"
          />
        </label>

        <label>
          <input
            type="text"
            placeholder="ADD/EDIT instagram link"
            className="add_note"
          />
        </label>
        <div className="save_button">
          <button type="button">SAVE CHANGES</button>
        </div>
      </form>
    </div>
  );
};

export default EditMove;

const EditMove = () => {
  return (
    <div className="editmove">
      <div>
        <h1 className="editmove_header">Edit Move</h1>
      </div>
      <form className="editmove_form">
          <input
            type="text"
            placeholder="EDIT move name"
            className="edit_move_input"
            required
          />
          <input
            type="text"
            placeholder="ADD/EDIT creator name"
            className="edit_move_input"
          />
          <input
            placeholder="ADD/EDIT notes"
            className="edit_move_input"
            maxLength="100"
            />
          <input
            type="text"
            placeholder="ADD/EDIT instagram link"
            className="edit_move_input"
          />
        <div>
          <button type="button" className="saveChangesButton">SAVE CHANGES</button>
        </div>
      </form>
    </div>
  );
};

export default EditMove;

import React from "react";

const AddMove = () => {
  return (
    <div className="addmove">
      <h3 className="addMoveHeader">Add Move</h3>
      <form className="addMoveForm">
        <input type="text" name="newMoveName" placeholder="Add new MOVE NAME" size="10" required />
        <input type="text" name="newCreatorName" placeholder="Add CREATOR'S NAME (optional)" />
        <input type="text" name="newNote" placeholder="Add NOTE (optional)" maxLength="200"/>
        <input type="text" name="newIGlink" placeholder="Add INSTAGRAM LINK (optional)" />
        <button type="submit" className="savebutton">save</button>
      </form>
    </div>
  );
};

export default AddMove;

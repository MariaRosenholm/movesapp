import React, { useState } from "react";
import SavedSuccessfully from "./SavedSuccessfully";

const AddMove = ({ getAllMoves }) => {
  const initialState = {
    Move: "",
    Creator: "",
    HOX: "",
    Link: "",
  };
  const [inputData, setInputData] = useState(initialState);
  const [showSaved, setShowSaved] = useState(false);

  const inputHandler = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const addMoveSubmitHandler = (e) => {
    e.preventDefault();
    const dataForBackend = {
      movename: inputData.Move,
      creator: inputData.Creator,
      hox: inputData.HOX,
      link: inputData.Link,
    };
    fetch("https://apricot-cake-10393.herokuapp.com/addNew", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(dataForBackend),
    })
      .then(getAllMoves)
      .then(() => {
        setInputData(initialState);
        setShowSaved(true);
      })
      .catch((error) => console.log(error));
  };

  const addMoveForm = () => {
    return (
      <div className="addmove">
        <h3 className="addMoveHeader">Add Move</h3>
        <form className="addMoveForm" onSubmit={addMoveSubmitHandler}>
          <p className="labels">Add new MOVE NAME</p>
          <input
            type="text"
            name="Move"
            size="10"
            required
            value={inputData.Move}
            onChange={inputHandler}
          />
          <p className="labels">Add CREATOR'S NAME (optional)</p>
          <input
            type="text"
            name="Creator"
            value={inputData.Creator}
            onChange={inputHandler}
          />
          <p className="labels">Add NOTE (optional)</p>
          <input
            type="text"
            name="HOX"
            maxLength="200"
            value={inputData.HOX}
            onChange={inputHandler}
          />
          <p className="labels">Add INSTAGRAM LINK (optional)</p>
          <input
            type="text"
            name="Link"
            value={inputData.Link}
            onChange={inputHandler}
          />
          <button type="submit" className="savebutton">
            save
          </button>
        </form>
      </div>
    );
  };

  return (
    <>
      {addMoveForm()}
      {showSaved && <SavedSuccessfully path={"/new"} />}
    </>
  );
};

export default AddMove;

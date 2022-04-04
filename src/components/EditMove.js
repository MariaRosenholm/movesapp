import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SavedSuccessfully from './SavedSuccessfully';

const baseURL = 'https://apricot-cake-10393.herokuapp.com/updateMove';

const EditMove = ({ dancelist, getAllMoves }) => {
  const navigate = useNavigate();
  const params = useParams();

  const move = dancelist.find((dancemove) => dancemove.Id === +params.id);
  const startingInput = {
    Id: +params.id,
    Move: move?.Move,
    Creator: move?.Creator || '',
    HOX: move?.HOX || '',
    Link: move?.Link || '',
  };

  const [input, setInput] = useState(startingInput);
  const [showSaved, setShowSaved] = useState(false);

  const inputHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  let timeoutId;
  const addEditedMove = (e) => {
    e.preventDefault();
    const dataForBackend = {
      id: input.Id,
      movename: input.Move,
      creator: input.Creator,
      hox: input.HOX,
      link: input.Link,
    };
    fetch(baseURL, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataForBackend),
    })
      .then(getAllMoves)
      .then(() => {
        timeoutId = setTimeout(() => {
          navigate('/moves/' + input.Id);
        }, 5000);
        setShowSaved(true);
      })
      .catch((error) => {
        console.log('this is the error', error);
      });
  };

  return (
    <div className="editmove">
      <div>
        <h1 className="editmove_header">Edit Move</h1>
      </div>
      <form className="editmove_form">
        <p className="labels">Moves name*</p>
        <input
          type="text"
          required
          name="Move"
          value={input.Move}
          onChange={inputHandler}
        />
        <p className="labels">Creator name</p>
        <input
          type="text"
          name="Creator"
          value={input.Creator}
          onChange={inputHandler}
        />
        <p className="labels">Notes</p>
        <input
          maxLength="25"
          name="HOX"
          value={input.HOX}
          onChange={inputHandler}
          className="notes_field"
        />
        <p className="labels">Link</p>
        <input
          type="text"
          name="Link"
          value={input.Link}
          onChange={inputHandler}
          className="link_field"
        />
        <div>
          <button
            type="submit"
            className="saveChangesButton"
            onClick={addEditedMove}
          >
            SAVE CHANGES
          </button>
        </div>
      </form>
      {showSaved && (
        <SavedSuccessfully path={'/moves/' + input.Id} timeoutId={timeoutId} />
      )}
    </div>
  );
};

export default EditMove;

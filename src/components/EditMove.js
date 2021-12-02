import React, { Component } from "react";
import { useParams } from "react-router-dom";



const baseURL = "http://localhost:3001/moves";

const EditMove = ({ dancelist, editMagic, postEdit }) => {
  const params = useParams();
  let move = dancelist.find((move) => move.Id === +params.id);

  /*class EditMove extends Component {
    state = {
      move: "",
      creator: "",
      link: "",
      info: "",
      id: "2"
    }
  
    changeHandler = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
  
      })
      console.log(this.state.move)
      console.log(this.state.creator)
      console.log(this.state.link)
      console.log(this.state.info)
      console.log(this.props.dancelist);
    }*/
  /*moveSaveHandler = (e) => {
    e.preventDefault();
  */
  /* put(baseURL, {
     Move: this.state.move,
     Creator: this.state.creator,
     Link: this.state.link,
     Hox: this.state.info,
     Id: { Id },
   }).then(resp => {
     console.log(resp.data);
   }).catch(error => {
     console.log(error);
   });*/



  return (
    <div className="editmove" >
      <div>
        <h1 className="editmove_header">Edit Move</h1>
      </div>
      <form className="editmove_form">
        <input
          type="text"
          placeholder="EDIT move name"
          className="edit_move_input"
          required
          name="move"
          value={move?.Move}
          onChange={editMagic}
        />
        <input
          type="text"
          placeholder="ADD/EDIT creator name"
          className="edit_move_input"
          name="creator"
          value={move?.Creator}
          onChange={editMagic}
        />
        <input
          placeholder="ADD/EDIT notes"
          className="edit_move_input"
          maxLength="100"

          name="info"
          value={move?.HOX}
          onChange={editMagic}
        />
        <input
          type="text"
          placeholder="ADD/EDIT instagram link"
          className="edit_move_input"

          name="link"
          value={move?.Link}
          onChange={editMagic}
        />
        <div>
          <button type="submit" className="saveChangesButton" onClick={postEdit}>SAVE CHANGES</button>
        </div>
      </form>
    </div >
  );

};

export default EditMove;

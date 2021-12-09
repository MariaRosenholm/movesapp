import React, { Component } from "react";

const baseURL = "http://localhost:3001/moves/";

class EditMove extends Component {
  backToMoves = this.props.backToMoves;
  move = this.props.dancelist.find((move) => move.Id === this.props.id);
  state = {
    Id: this.props.id,
    Move: this.move?.Move,
    Creator: this.move?.Creator || "",
    HOX: this.move?.HOX || "",
    Link: this.move?.Link || "",
  };

  inputHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addEditedMove = (e) => {
    e.preventDefault();
    fetch(baseURL + this.state.Id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    })
      .then(() => {
        this.props.getAllMoves();
      })
      .then(() => {
        this.backToMoves("/moves/" + this.state.Id)
      })
      .catch((error) => {
        console.log("this is the error", error);
      });
  };

  render() {
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
            name="Move"
            value={this.state.Move}
            onChange={this.inputHandler}
          />
          <input
            type="text"
            placeholder="ADD/EDIT creator name"
            className="edit_move_input"
            name="Creator"
            value={this.state.Creator}
            onChange={this.inputHandler}
          />
          <input
            placeholder="ADD/EDIT notes"
            className="edit_move_input"
            maxLength="100"
            name="HOX"
            value={this.state.HOX}
            onChange={this.inputHandler}
          />
          <input
            type="text"
            placeholder="ADD/EDIT instagram link"
            className="edit_move_input"
            name="Link"
            value={this.state.Link}
            onChange={this.inputHandler}
          />
          <div>
            <button
              type="submit"
              className="saveChangesButton"
              onClick={this.addEditedMove}
            >
              SAVE CHANGES
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default EditMove;

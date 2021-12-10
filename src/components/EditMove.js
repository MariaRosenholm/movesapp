import React, { Component } from "react";
import SavedSuccessfully from "./SavedSuccessfully";

const baseURL = "http://localhost:3001/moves/";

class EditMove extends Component {
  navigate = this.props.navigate;
  move = this.props.dancelist.find((move) => move.Id === this.props.id);
  state = {
    input: {
      Id: this.props.id,
      Move: this.move?.Move,
      Creator: this.move?.Creator || "",
      HOX: this.move?.HOX || "",
      Link: this.move?.Link || "",
    },
    showSavedSuccessfully: false,
  };

  inputHandler = (e) => {
    this.setState({
      input: { ...this.state.input, [e.target.name]: e.target.value },
    });
  };

  addEditedMove = (e) => {
    e.preventDefault();
    fetch(baseURL + this.state.input.Id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state.input),
    })
      .then(this.props.getAllMoves)
      .then(() => {
        let timeoutId = setTimeout(() => {
          this.navigate("/moves/" + this.state.input.Id);
        }, 2000);
        this.setState({ showSavedSuccessfully: true, timeoutId: timeoutId });
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
            value={this.state.input.Move}
            onChange={this.inputHandler}
          />
          <input
            type="text"
            placeholder="ADD/EDIT creator name"
            className="edit_move_input"
            name="Creator"
            value={this.state.input.Creator}
            onChange={this.inputHandler}
          />
          <input
            placeholder="ADD/EDIT notes"
            className="edit_move_input"
            maxLength="100"
            name="HOX"
            value={this.state.input.HOX}
            onChange={this.inputHandler}
          />
          <input
            type="text"
            placeholder="ADD/EDIT instagram link"
            className="edit_move_input"
            name="Link"
            value={this.state.input.Link}
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
        {this.state.showSavedSuccessfully && (
          <SavedSuccessfully
            path={"/moves/" + this.state.input.Id}
            timeoutId={this.state.timeoutId}
          />
        )}
      </div>
    );
  }
}

export default EditMove;

import React, { Component } from "react";
import SavedSuccessfully from "./SavedSuccessfully";

class AddMove extends Component {
  state = {
    inputData: {
      Move: "",
      Creator: "",
      HOX: "",
      Link: "",
    },
      showSavedSuccessfully: false
  };

  inputHandler = (e) => {
    this.setState({
      inputData: {...this.state.inputData, [e.target.name]: e.target.value }
  });
};

  addMoveSubmitHandler = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/moves", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(this.state.inputData),
    }).then(() => {
      this.props.getAllMoves();
    })
    .then(()=> {
      this.setState(
        {inputData: {
          Move: "",
          Creator: "",
          HOX: "",
          Link: "",
        },
        showSavedSuccessfully: true})
    })
    .catch(error => console.log(error));
  };

  addMoveForm = () => {
    return (
      <div className="addmove">
        <h3 className="addMoveHeader">Add Move</h3>
        <form className="addMoveForm" onSubmit={this.addMoveSubmitHandler}>
          <input
            type="text"
            name="Move"
            placeholder="Add new MOVE NAME"
            size="10"
            required
            value={this.state.inputData.Move}
            onChange={this.inputHandler}
          />
          <input
            type="text"
            name="Creator"
            placeholder="Add CREATOR'S NAME (optional)"
            value={this.state.inputData.Creator}
            onChange={this.inputHandler}
          />
          <input
            type="text"
            name="HOX"
            placeholder="Add NOTE (optional)"
            maxLength="200"
            value={this.state.inputData.HOX}
            onChange={this.inputHandler}
          />
          <input
            type="text"
            name="Link"
            placeholder="Add INSTAGRAM LINK (optional)"
            value={this.state.inputData.Link}
            onChange={this.inputHandler}
          />
          <button type="submit" className="savebutton">
            save
          </button>
        </form>
        </div>
    )
  }

  render() {
    return (
      <>
      {this.addMoveForm()}
      {this.state.showSavedSuccessfully &&<SavedSuccessfully />}
      </>
      )
}
}

export default AddMove;

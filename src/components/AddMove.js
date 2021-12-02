import React, { Component } from 'react';

class AddMove extends Component {
  state = {
    Move: '',
    Creator: '',
    HOX: '',
    Link: ''
  }
  
  addMoveChangeHandler = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  addMoveSubmitHandler = (e) => {
    fetch('http://localhost:3001/moves', {
      method: 'POST',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(this.state)
    })
    .then(function(response) {
      console.log(response)
      return response.json();
    });
      e.preventDefault();
  }

  render() {
    return (
      <div className="addmove">
      <h3 className="addMoveHeader">Add Move</h3>
      <form className="addMoveForm" onSubmit={this.addMoveSubmitHandler}>
        <input type="text" name="Move" placeholder="Add new MOVE NAME" size="10" required value={this.state.Move} onChange={this.addMoveChangeHandler}/>
        <input type="text" name="Creator" placeholder="Add CREATOR'S NAME (optional)" value={this.state.Creator} onChange={this.addMoveChangeHandler}/>
        <input type="text" name="HOX" placeholder="Add NOTE (optional)" maxLength="200" value={this.state.HOX} onChange={this.addMoveChangeHandler}/>
        <input type="text" name="Link" placeholder="Add INSTAGRAM LINK (optional)" value={this.state.Link} onChange={this.addMoveChangeHandler}/>
        <button type="submit" className="savebutton">save</button>
      </form>
    </div>
    );
  }
}

export default AddMove;

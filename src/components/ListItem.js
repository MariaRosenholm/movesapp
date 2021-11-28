import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";

class ListItem extends Component {
  render() {
    return (
      <div className="ListItem" onClick={() => this.props.idCol(this.props.Id)}>
        <Link to={"/moves/" + this.props.Id}>
          <p>
            {this.props.move} by {this.props.creator}
          </p>
        </Link>
      </div>
    );
  }
}

export default ListItem;

import React, { Component } from "react";
import ListItem from "./ListItem";

class Search extends Component {
  state = {
    searchedKey: "",
  };

  searchInputHandler = (event) => {
    this.setState({
      searchedKey: event.target.value,
    });
  };

  render() {
    let danceFilter1 = this.props.dancelist.filter((searchedKey) => {
      let result;

      if (
        searchedKey.Move.toLowerCase().includes(
          this.state.searchedKey.toLowerCase()
        )
      ) {
        result = searchedKey.Move.toLowerCase().includes(
          this.state.searchedKey.toLowerCase()
        );
      } else if (
        searchedKey.Creator.toLowerCase().includes(
          this.state.searchedKey.toLowerCase()
        )
      ) {
        result = searchedKey.Creator.toLowerCase().includes(
          this.state.searchedKey.toLowerCase()
        );
      }
      return result;
    });

    return (
      <div className="search">
        <div className="searchWrapper">
          <input
            placeholder="search"
            onChange={this.searchInputHandler}
            className="searchValue" // onClick={deleteSearch}
          />
        </div>
        {danceFilter1.map((c) => (
          <ListItem
            move={c.Move}
            creator={c.Creator}
            Id={c.Id}
            idCol={this.props.idCollector}
          />
        ))}
      </div>
    );
  }
}

export default Search;

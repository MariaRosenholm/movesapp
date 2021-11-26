import React, { Component } from "react";
import ListItem from "./ListItem";
import DanceMove from "./DanceMove";

class Search extends Component {
  state = {
    searchedKey: "",
    showMovePage: false,
    smallCardMove: " ",
  };

  searchInputHandler = (event) => {
    this.setState({
      searchedKey: event.target.value,
    });
  };

  showMovePage = (move) => {
    this.setState({
      showMovePage: true,
      smallCardMove: move,
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

    let danceFilter2 = this.props.dancelist.filter((smallCardMove) => {
      let result;

      if (
        smallCardMove.Move.toLowerCase().includes(
          this.state.smallCardMove.toLowerCase()
        )
      ) {
        result = smallCardMove.Move.toLowerCase().includes(
          this.state.smallCardMove.toLowerCase()
        );
      } else if (
        smallCardMove.Creator.toLowerCase().includes(
          this.state.smallCardMove.toLowerCase()
        )
      ) {
        result = smallCardMove.Creator.toLowerCase().includes(
          this.state.smallCardMove.toLowerCase()
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
            showMove={this.showMovePage}
            move={c.Move}
            creator={c.Creator}
          />
        ))}
        {this.state.showMovePage &&
          danceFilter2.map((c) => (
            <DanceMove
              move={c.Move}
              creator={c.Creator}
              info={c.HOX}
              link={c.Link}
            />
          ))}
      </div>
    );
  }
}

export default Search;

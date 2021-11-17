import React from "react";
import Card from "./SmallMoveCard";
import DanceList from "../db.json";
// import DanceMovePage from "./DanceMovePage";

const Search = () => {
  return (
    <div className="search">
      <div className="searchWrapper">
        <input
          value="search"
          className="searchValue" /*onClick={deleteSearch}*/
        />
      </div>
      <div>
        {DanceList.moves.map((c) => (
          <Card
            move={c.Move}
            creator={c.Creator}
            // moveCard={<DanceMovePage />}
          />
        ))}
      </div>
    </div>
  );
};

export default Search;

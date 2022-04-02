import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./style.css";
import Main from "./components/Main";
import Login from "./components/Login";
import Search from "./components/Search";
import AddMove from "./components/AddMove";
import EditMove from "./components/EditMove";
import Footer from "./components/Footer";
import DanceMove from "./components/DanceMove";
import Menu from "./components/Menu";
require("dotenv").config();

const App = () => {
  const [moves, setMoves] = useState([]);

  const getAllMoves = () => {
    fetch("https://apricot-cake-10393.herokuapp.com/allmoves")
      .then((response) => response.json())
      .then((data) => {
        const cleanedData = data.map((move) => ({
          Id: move.id,
          Move: move.movename,
          Creator: move.creator || "",
          HOX: move.hox || "",
          Link: move.link || "",
        }));
        setMoves(cleanedData);
      });
  };

  useEffect(getAllMoves, []);

  return (
    <div className="app">
      <Routes>
        <Route path="/movesapp/" element={<Main />} />
        <Route path="/movesapp/login" element={<Login />} />
        <Route path="/movesapp/search" element={<Search dancelist={moves} />} />
        <Route
          path={"/movesapp/moves/:id"}
          element={<DanceMove dancelist={moves} />}
        />
        <Route
          path="/movesapp/new"
          element={<AddMove getAllMoves={getAllMoves} />}
        />
        <Route
          path="/movesapp/edit/:id"
          element={<EditMove dancelist={moves} getAllMoves={getAllMoves} />}
        />
      </Routes>
      <Footer />
      <Menu />
    </div>
  );
};

export default App;

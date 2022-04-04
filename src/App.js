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
import Information from "./components/Information";
import Support from "./components/Support";
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
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<Search dancelist={moves} />} />
        <Route path={"/moves/:id"} element={<DanceMove dancelist={moves} />} />
        <Route path="/new" element={<AddMove getAllMoves={getAllMoves} />} />
        <Route
          path="/edit/:id"
          element={<EditMove dancelist={moves} getAllMoves={getAllMoves} />}
        />
        <Route path="/information" element={<Information />} />
        <Route path="/support" element={<Support />} />
      </Routes>
      <Footer />
      <Menu />
    </div>
  );
};

export default App;

import "./style.css";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { Routes, Route, Link } from "react-router-dom";
import { Component } from "react";
import Search from "./components/Search";
import AddMove from "./components/AddMove";
import EditMove from "./components/EditMove";
import MainNoLog from "./components/MainNoLog";

class App extends Component {
  state = {
    moves: [],
  };

  componentDidMount() {
    fetch("http://localhost:3001/moves")
      .then((response) => response.json())
      .then((moveData) => {
        this.setState({ moves: moveData });
      });
  }

  render() {
    return (
      <div className="app">
        <div className="tempContainer">
          <Routes>
            <Route path="/" element={<MainNoLog />} />
            <Route path="/login" element={<Main />} />
            <Route
              path="/search"
              element={<Search dancelist={this.state.moves} />}
            />
            {/* <Route path="/moves/:id" element={<DanceMove />} /> */}
            <Route path="/new" element={<AddMove />} />
            <Route path="/edit/:id" element={<EditMove />} />
          </Routes>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;

import { Component } from "react";
import { Routes, Route } from "react-router-dom";
import "./style.css";
import Main from "./components/Main";
import Login from "./components/Login";
import Search from "./components/Search";
import AddMove from "./components/AddMove";
import EditMove from "./components/EditMove";
import Footer from "./components/Footer";
import DanceMove from "./components/DanceMove";

class App extends Component {
  state = {
    moves: [],
    id: 0,
  };

  componentDidMount() {
    fetch("http://localhost:3001/moves")
      .then((response) => response.json())
      .then((moveData) => {
        this.setState({ moves: moveData });
      });
  }

  idCollector = (ID) => {
    this.setState({ id: ID });
  };

  render() {
    return (
      <div className="app">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/search"
            element={
              <Search
                dancelist={this.state.moves}
                idCollector={this.idCollector}
              />
            }
          />
          <Route
            path={"/moves/" + this.state.id}
            element={
              <DanceMove
                listItemId={this.state.id}
                dancelist={this.state.moves}
              />
            }
          />
          <Route path="/new" element={<AddMove />} />
          <Route path="/edit/:id" element={<EditMove />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default App;

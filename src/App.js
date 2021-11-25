import "./style.css";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { BrowserRouter as Router } from "react-router-dom";
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
      <Router>
        <h1 className="tepmSectionH1">MAIN</h1>
        <div className="tempContainer">
          <Main />
          <Footer />
        </div>

        <h1 className="tepmSectionH1">MAIN without LogIn</h1>
        <div className="tempContainer">
          <MainNoLog />
          <Footer />
        </div>

        <h1 className="tepmSectionH1">SEARCH</h1>
        <div className="tempContainer">
          <Search dancelist={this.state.moves} />
          <Footer />
        </div>

        <h1 className="tepmSectionH1">DANCE MOVE</h1>
        <div className="tempContainer">
          <p>We have Dance Move page here</p>
          {/* <DanceMove /> */}
          <Footer />
        </div>

        <h1 className="tepmSectionH1">EDIT DANCE MOVE</h1>
        <div className="tempContainer">
          <EditMove />
          <Footer />
        </div>

        <h1 className="tepmSectionH1">NEW DANCE MOVE</h1>
        <div className="tempContainer">
          <AddMove />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;

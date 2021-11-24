import "./style.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import { Component } from "react";
import Search from "./components/Search";
import AddMove from "./components/AddMove";
import EditMove from "./components/EditMove";

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
        {/* MAIN page!
      Header and wrapping div is only for this development face 
      */}
        <h1 className="tepmSectionH1">MAIN</h1>
        <div className="tempContainer">
          <Header />
          <Main />
          <Footer />
        </div>

        {/* SEARCH page!
      Header and wrapping div is only for this development face
      */}
        <h1 className="tepmSectionH1">SEARCH</h1>
        <div className="tempContainer">
          {/* <Header />
          <p>We have Dance Move page here</p> */}
          <Search dancelist={this.state.moves} />
          <Footer />
        </div>

        {/* DANCE MOVE page!
      Header and wrapping div is only for this development face
      */}
        <h1 className="tepmSectionH1">DANCE MOVE</h1>
        <div className="tempContainer">
          <Header />
          <p>We have Dance Move page here</p>
          {/* <DanceMove /> */}
          <Footer />
        </div>

        {/* EDIT DANCE MOVE page!
      Header and wrapping div is only for this development face
      */}
        <h1 className="tepmSectionH1">EDIT DANCE MOVE</h1>
        <div className="tempContainer">
          <EditMove />
          <Footer />
        </div>

        {/* NEW DANCE MOVE page!
      Header and wrapping div is only for this development face
      */}
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

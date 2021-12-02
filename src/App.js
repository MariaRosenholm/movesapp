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
    move: "",
    creator: "",
    link: "",
    info: "",
  };

  componentDidMount() {
    fetch("http://localhost:3001/moves/")
      .then((response) => response.json())
      .then((moveData) => {
        this.setState({ moves: moveData });
      });
  }
  magic = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value, })
  }

  addEditedMove = (e) => {

    e.preventDefault();
    console.log("this is e", e)

    fetch("http://localhost:3001/moves/1", {
      method: 'PUT',
      headers: {
        'Content-type': 'application/ json; charset = UTF - 8',
      },
      body: JSON.stringify({
        Move: this.state.move,
        Creator: this.state.creator,
        Link: this.state.link,
        Hox: this.state.info,

      }),

    })
      .then(resp => {
        resp.json()
      }).catch(error => {
        console.log("this is the error", error);
      })

  }




  render() {
    console.log(this.state.info);
    return (
      <div className="app">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/search"
            element={<Search dancelist={this.state.moves} />}
          />
          <Route
            path={"/moves/:id"}
            element={<DanceMove dancelist={this.state.moves} />}
          />
          <Route path="/new" element={<AddMove />} />
          <Route path="/edit/:id" element={<EditMove editMagic={this.magic} dancelist={this.state.moves} postEdit={this.addEditedMove} />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default App;

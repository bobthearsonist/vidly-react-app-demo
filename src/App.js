import React, { Component } from "react";
import "./App.css";
import Movies from "./components/movies/movies";
import NavBar from "./components/navbar";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Movies />
      </React.Fragment>
    );
  }
}

export default App;

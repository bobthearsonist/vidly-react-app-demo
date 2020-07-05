import React, { Component } from "react";
import "./App.css";
import Movies from "./components/movies/movies";
import VidlyNavBar from "./components/navbar";
import { Route, Switch, Redirect } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <VidlyNavBar />
        <div className="content">
          <Switch>
            <Route path="/movies" component={Movies} />
            <Redirect exact path="/" to="/movies" />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default App;

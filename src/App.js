import React, { Component } from "react";
import "./App.css";
import Movies from "./components/movies";
import VidlyNavBar from "./components/navbar";
import { Route, Switch, Redirect } from "react-router-dom";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import Movie from "./components/movie";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <VidlyNavBar />
        <div className="content">
          <Switch>
            <Route path="/movies" component={Movies} />
            <Route path="/movie/:id" component={Movie} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Redirect exact path="/" to="/movies" />
            <Redirect to="/404" />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default App;

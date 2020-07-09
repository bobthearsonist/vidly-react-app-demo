import React, { Component } from "react";
import "./App.css";
import Movies from "./components/movies";
import VidlyNavBar from "./components/navbar";
import { Route, Switch, Redirect } from "react-router-dom";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import MovieForm from "./components/movieForm";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <VidlyNavBar />
        <main className="content">
          <Switch>
            <Route path="/movies" component={Movies} />
            <Route path="/movie/:id" component={MovieForm} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Redirect exact from="/" to="/movies" />
            <Redirect to="/404" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;

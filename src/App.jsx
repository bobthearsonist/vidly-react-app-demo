import React from "react";
import "./App.css";
import Movies from "./components/movies";
import VidlyNavBar from "./components/navBar";
import { Route, Switch, Redirect } from "react-router-dom";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import MovieForm from "./components/movieForm";
import Login from "./components/login";

function App() {
  return (
    <main className="container-fluid">
      <VidlyNavBar />
      <div className="content">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/movies" component={Movies} />
          <Route path="/movie/:id" component={MovieForm} />
          <Route path="/customers" component={Customers} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/notfound" component={NotFound} />
          <Redirect exact from="/" to="/movies" />
          <Redirect to="/notfound" />
        </Switch>
      </div>
    </main>
  );
}

function NotFound() {
  return <h1>NotFound</h1>;
}

export default App;

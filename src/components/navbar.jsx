import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

export default class NavBar extends Component {
  state = { expand: false };

  handleExpand = () => {
    const expand = !this.state.expand;

    this.setState({ expand });
  };

  render() {
    return (
      <nav expanded className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Vidly
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            aria-expanded="true"
            onClick={() => this.handleExpand()}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={
              this.state.expand ? "collapse navbar-collapse" : "navbar-collapse"
            }
            id="collapseNavbar"
          >
            <div className="navbar-nav">
              <NavLink className="nav-link" to="/movies">
                Movies
              </NavLink>
              <NavLink className="nav-link" to="/customers">
                Customers
              </NavLink>
              <NavLink className="nav-link" to="/rentals">
                Rentals
              </NavLink>
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

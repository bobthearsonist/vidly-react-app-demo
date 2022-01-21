import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  state = { collapse: true };

  handleExpand = () => {
    const collapse = !this.state.collapse;

    this.setState({ collapse });
  };

  onComponentDidMount = () => {
    const { collapse } = true;

    this.setState({ collapse });
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
              this.state.collapse
                ? "collapse navbar-collapse"
                : "navbar-collapse"
            }
            id="collapseNavbar"
          >
            <div className="navbar-nav">
              <Link className="nav-link" to="/movies">
                Movies
              </Link>
              <Link className="nav-link" to="/customers">
                Customers
              </Link>
              <Link className="nav-link" to="/rentals">
                Rentals
              </Link>
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

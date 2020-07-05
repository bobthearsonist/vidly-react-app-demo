import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Vidly
      </Link>
      <div className="navbar" id="navbarNav">
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
        </div>
      </div>
    </nav>
  );
}

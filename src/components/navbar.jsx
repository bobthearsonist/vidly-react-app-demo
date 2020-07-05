import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <Link class="navbar-brand" to="/">
        Vidly
      </Link>
      <div class="navbar" id="navbarNav">
        <div class="navbar-nav">
          <Link class="nav-link" to="/movies">
            Movies
          </Link>
          <Link class="nav-link" to="/customers">
            Customers
          </Link>
          <Link class="nav-link" to="/rentals">
            Rentals
          </Link>
        </div>
      </div>
    </nav>
  );
}

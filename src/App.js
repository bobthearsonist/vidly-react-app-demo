import React, { Component } from "react";
import "./App.css";
import Movies from "./components/movies";
import { getMovies, deleteMovie } from "./services/fakeMovieService";
import Pagination from "./components/pagination";
import _ from "lodash";

class App extends Component {
  state = { movies: getMovies(), pageSize: 4, currentPage: 1 };

  handleDelete = (movieId) => {
    console.log("handle delete " + movieId);
    deleteMovie(movieId);
    this.setState({ movies: getMovies() });
  };

  handleLike = (movie) => {
    console.log("handle delete " + movie.id);
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = (page) => {
    console.log("handle page event " + page);
    this.setState({ currentPage: page });
  };

  render() {
    const { movies, count = movies.length, pageSize, currentPage } = this.state;
    const pagedMovies = _(movies)
      .slice((currentPage - 1) * pageSize)
      .take(pageSize)
      .value();

    console.log("paging:" + (currentPage - 1) * pageSize + ":" + pageSize);
    return (
      <main className="container">
        <h2>{count} Movies</h2>
        <Movies
          movies={pagedMovies}
          onLike={(movie) => this.handleLike(movie)}
          onDelete={(id) => this.handleDelete(id)}
        />
        <footer>
          <Pagination
            itemsCount={count}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={(page) => this.handlePageChange(page)}
          />
        </footer>
      </main>
    );
  }
}

export default App;

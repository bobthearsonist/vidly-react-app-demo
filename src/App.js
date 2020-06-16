import React, { Component } from "react";
import "./App.css";
import Movies from "./components/movies";
import { getMovies, deleteMovie } from "./services/fakeMovieService";

class App extends Component {
  state = { movies: getMovies() };

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

  render() {
    const { movies } = this.state;
    return (
      <main className="container">
        <h2>{movies.length} Movies</h2>
        <Movies
          movies={movies}
          onLike={(movie) => this.handleLike(movie)}
          onDelete={(id) => this.handleDelete(id)}
        />
      </main>
    );
  }
}

export default App;

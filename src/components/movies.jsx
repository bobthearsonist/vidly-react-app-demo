import React, { Component } from "react";
import { getMovies, deleteMovie } from "../services/fakeMovieService";
import Like from "./like";

class Movies extends Component {
  state = { movies: getMovies() };

  handleAdd = (movie) => {
    this.setState({ movies: this.state.movies.set(movie.id, movie) });
  };

  handleDelete = (movieId) => {
    deleteMovie(movieId);
    this.setState({ movies: getMovies() });
  };

  handleLike = (movieId) => {
    console.log("handle click");
    this.state.movies.filter((movie) => movie._id === movieId);
    //this.setState({ movies: getMovies() });
  };

  render() {
    if (this.state.movies.length === 0) return <p>No More Movies</p>;
    return this.movieTable();
  }

  movieTable() {
    const { movies } = this.state;
    return (
      <React.Fragment>
        <h2>{movies.length} Movies</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th scope="col" />
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie, index) => {
              return this.buildTableEntry(movie);
            })}
          </tbody>
        </table>
      </React.Fragment>
    );
  }

  buildTableEntry = (movie) => {
    const {
      _id: id,
      title,
      genre,
      numberInStock: stock,
      dailyRentalRate: rate,
      liked = false,
    } = movie;
    return (
      <tr key={id}>
        <th scope="row">{title}</th>
        <td>{genre.name}</td>
        <td>{stock}</td>
        <td>{rate}</td>
        <td>
          <Like liked={liked} onLike={() => this.handleLike(id)}></Like>
        </td>
        <td>
          <button
            onClick={(id) => this.handleDelete(id)}
            className="btn btn-danger btn-sm"
          >
            Delete
          </button>
        </td>
      </tr>
    );
  };
}

export default Movies;

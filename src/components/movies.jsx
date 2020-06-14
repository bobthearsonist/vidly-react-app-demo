import React, { Component } from "react";
import { getMovies, deleteMovie } from "../services/fakeMovieService";

class Movies extends Component {
  movie = {
    _id: 123456,
    title: "DieHard",
    genre: "shit",
    stock: 1,
    rate: "$1",
  };
  state = { movies: getMovies() };

  handleAdd = (movie) => {
    this.setState({ movies: this.state.movies.set(movie.id, movie) });
  };

  handleDelete = (movieId) => {
    deleteMovie(movieId);
    this.setState({ movies: getMovies() });
  };

  render() {
    if (this.state.movies.length === 0) return "No More Movies";
    return this.movieTable();
  }

  movieTable() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Genre</th>
            <th scope="col">Stock</th>
            <th scope="col">Rate</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {this.state.movies.map((movie, index) => {
            return this.buildTableEntry(movie);
          })}
        </tbody>
      </table>
    );
  }

  buildTableEntry = (movie) => {
    const {
      _id: id,
      title,
      genre,
      numberInStock: stock,
      dailyRentalRate: rate,
    } = movie;
    console.log(movie);
    return (
      <tr key={id}>
        <th scope="row">{title}</th>
        <td>{genre.name}</td>
        <td>{stock}</td>
        <td>{rate}</td>
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

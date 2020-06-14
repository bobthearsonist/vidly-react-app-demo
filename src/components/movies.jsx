import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

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

  handleDelete = (movie) => {
    this.setState({ movies: this.state.movies.set(movie.id, movie) });
  };

  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Genre</th>
            <th scope="col">Stock</th>
            <th scope="col">Rate</th>
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
      </tr>
    );
  };
}

export default Movies;

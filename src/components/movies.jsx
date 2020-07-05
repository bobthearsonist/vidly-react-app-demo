import React, { Component } from "react";
import TableHeader from "./tableHeader";
import Like from "./like";
import TableBody from "./tableBody";

class Movies extends Component {
  handleLike = (movie, onLike) => {
    console.log("pass like ");
    console.log({ movie });
    onLike(movie);
  };

  handleDelete = (id, onDelete) => {
    console.log("pass delete " + id);
    onDelete(id);
  };

  render() {
    if (this.props.movies.length === 0) return <p>No More Movies</p>;
    return this.movieTable(this.props);
  }

  columns = [
    { label: "Title", path: "title" },
    { label: "Genre", path: "genre.name" },
    { label: "Stock", path: "numberInStock" },
    { label: "Rate", path: "dailyRentalRate" },
    {
      path: "liked",
      content: (movie) => (
        <Like
          liked={movie.liked}
          onLike={() => this.handleLike(movie, this.props.onLike)}
        />
      ),
      hideLabel: true,
    },
    {
      content: (movie) => (
        <button
          onClick={() => this.handleDelete(movie.id, this.props.onDelete)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      ),
      sortable: false,
      hideLabel: true,
    },
  ];

  movieTable = ({ movies, sortOrder, onSort }) => {
    return (
      <React.Fragment>
        <table className="table">
          <TableHeader
            columns={this.columns}
            sortOrder={sortOrder}
            onSort={onSort}
          ></TableHeader>
          <TableBody data={movies} columns={this.columns}></TableBody>
        </table>
      </React.Fragment>
    );
  };
}

export default Movies;

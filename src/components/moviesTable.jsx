import React, { Component } from "react";
import Like from "./common/like";
import TableHeader from "./common/tableHeader";
import TableBody from "./common/tableBody";

class MoviesTable extends Component {
  render() {
    const { onSort, onDelete, onLike, movies, currentSort } = this.props;

    const columns = [
      { path: "title", label: "Title" },
      { path: "genre.name", label: "Genre" },
      { path: "numberInStock", label: "Stock" },
      { path: "dailyRentalRate", label: "Rate" },
      {
        path: "like",
        label: "Like",
        content: (movie) => (
          <Like
            liked={movie.liked}
            onClick={() => this.props.onLike(movie)}
          ></Like>
        ),
      },
      {
        key: "delete",
        content: (movie) => (
          <button
            className="btn btn-danger btn-sm active"
            onClick={() => {
              console.log("onDelete");
              this.props.onDelete(movie.id);
            }}
          >
            Delete
          </button>
        ),
      },
    ];

    return (
      <React.Fragment>
        <div className="row">
          <div className="col-1">
            <span className="badge bg-secondary">{movies.count}</span>
          </div>
          <div className="col">
            <span>Movies Available</span>
          </div>
        </div>
        <table className="table">
          <TableHeader
            onSort={onSort}
            currentSort={currentSort}
            data={[
              { text: "Title", path: "title" },
              { text: "Genre", path: "genre._id" },
              { text: "Stock", path: "numberInStock" },
              { text: "Rate", path: "dailyRentalRate" },
              { text: "Like", path: "like" },
              { key: "delete" },
            ]}
          />
          <TableBody
            data={movies.movies.map((movie) => ({ ...movie, id: movie._id }))}
            columns={columns}
            onDelete={onDelete}
            onLike={onLike}
          />
        </table>
      </React.Fragment>
    );
  }
}

export default MoviesTable;

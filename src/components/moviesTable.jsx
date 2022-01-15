import React, { Component } from "react";
import Movie from "./movie";

class MoviesTable extends Component {
  raiseSort = (path) => {
    let { currentSort } = this.props;

    if (currentSort.path === path) {
      currentSort.order = currentSort.order === "asc" ? "desc" : "asc";
    } else {
      currentSort = { path: path, order: "asc" };
    }

    this.props.onSort(currentSort);
  };

  render() {
    const { onSort, onDelete, onLiked, movies, currentSort } = this.props;

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
          <thead>
            <tr>
              <th onClick={() => this.raiseSort("title")}>Title</th>
              <th onClick={() => this.raiseSort("genre._id")}>Genre</th>
              <th onClick={() => this.raiseSort("numberInStock")}>Stock</th>
              <th onClick={() => this.raiseSort("dailyRentalRate")}>Rate</th>
              <th onClick={() => this.raiseSort("like")}>Like</th>
            </tr>
          </thead>
          <tbody>
            {movies.movies.map((movie) => (
              <Movie
                {...movie}
                key={movie._id}
                id={movie._id}
                onDelete={(id) => onDelete(id)}
                onLike={(id) => onLiked(id)}
              />
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default MoviesTable;

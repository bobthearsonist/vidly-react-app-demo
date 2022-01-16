import React, { Component } from "react";
import Like from "./common/like";
import Table from "./common/table";
import { PropTypes } from "prop-types";

class MoviesTable extends Component {
  render() {
    const { onSort, onDelete, onLike, movies, currentSort, count } = this.props;

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
            <span className="badge bg-secondary">{count}</span>
          </div>
          <div className="col">
            <span>Movies Available</span>
          </div>
        </div>
        <Table
          data={movies.map((movie) => ({ ...movie, key: movie._id }))}
          columns={columns}
          currentSort={currentSort}
          onSort={(movie) => onSort(movie)}
          onDelete={(movie) => onDelete(movie)}
          onLike={(movie) => onLike(movie)}
        />
      </React.Fragment>
    );
  }
}

MoviesTable.propTypes = {
  onSort: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onLike: PropTypes.func.isRequired,

  movies: PropTypes.arrayOf(PropTypes.object).isRequired,

  currentSort: PropTypes.object.isRequired,
  count: PropTypes.number.isRequired,
};

export default MoviesTable;

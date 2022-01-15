import React, { Component } from "react";
import Movie from "./movie";
import TableHeader from "./common/tableHeader";

class MoviesTable extends Component {
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
          <TableHeader
            onSort={onSort}
            currentSort={currentSort}
            data={[
              { text: "Title", path: "title" },
              { text: "Genre", path: "genre._id" },
              { text: "Stock", path: "numberInStock" },
              { text: "Rate", path: "dailyRentalRate" },
              { text: "Like", path: "like" },
            ]}
          />
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

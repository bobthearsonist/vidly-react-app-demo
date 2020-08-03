import React from "react";
import Table from "./common/table";
import { useNavigate, Link } from "react-router-dom";

export default function MoviesTable({
  onSort,
  onDelete,
  onLike,
  onSave,
  count,
  movies,
  ...rest
}) {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-1">
          <span className="badge bg-secondary">{count}</span>
        </div>
        <div className="col">
          <span>Movies Available</span>
        </div>
        <div className="col">
          <Link
            to={{
              pathname: "/movie/newmovie",
              onSave: (newMovie) => this.handleSave(newMovie),
              state: {
                movie: null,
              },
            }}
            className="btn btn-primary pull-right"
          >
            NewMovie
          </Link>
        </div>
      </div>
      <Table
        {...rest}
        data={movies}
        onSort={(movie) => onSort(movie)}
        onDelete={(movie) => onDelete(movie)}
        onLike={(movie) => onLike(movie)}
      />
    </React.Fragment>
  );
}

import React from "react";
import Table from "./common/table";
import { useNavigate } from "react-router-dom";

export default function MoviesTable({
  onSort,
  onDelete,
  onLike,
  count,
  movies,
  ...rest
}) {
  const navigate = useNavigate();
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
          <button
            onClick={() => navigate("/movie/newmovie")}
            className="btn btn-primary pull-right"
          >
            NewMovie
          </button>
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

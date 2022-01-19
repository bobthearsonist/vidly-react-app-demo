import React from "react";
import Table from "./common/table";

export default function MoviesTable({
  onSort,
  onDelete,
  onLike,
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

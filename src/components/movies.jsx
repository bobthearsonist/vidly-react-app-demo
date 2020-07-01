import React from "react";
import Like from "./like";
import _ from "lodash";

const Movies = (props) => {
  if (props.movies.length === 0) return <p>No More Movies</p>;
  return movieTable(props);
};

const handleLike = (movie, onLike) => {
  console.log("pass like ");
  console.log({ movie });
  onLike(movie);
};

const handleDelete = (id, onDelete) => {
  console.log("pass delete " + id);
  onDelete(id);
};

const handleSort = (selectedSortColumn, currentSortOrder, onSort) => {
  console.log("handle sort " + selectedSortColumn);

  const sortPaths = {
    Title: "title",
    Genre: "genre.name",
    Stock: "numberInStock",
    Rate: "dailyRentalRate",
    Liked: "liked",
  };
  const orderMap = { asc: true, desc: false };
  const orderLookup = _(orderMap).invert().value();
  const currentOrder = orderMap[currentSortOrder.order];

  onSort({
    path: currentSortOrder.path,
    order:
      sortPaths[selectedSortColumn] === currentSortOrder.path
        ? orderLookup[!currentOrder]
        : "asc",
  });
};

const movieTable = ({ movies, onLike, onDelete, sortOrder, onSort }) => {
  return (
    <React.Fragment>
      <table className="table">
        <thead>
          <tr>
            <th
              onClick={() => handleSort("Title", sortOrder, onSort)}
              scope="col"
            >
              Title
            </th>
            <th
              onClick={() => handleSort("Genre", sortOrder, onSort)}
              scope="col"
            >
              Genre
            </th>
            <th
              onClick={() => handleSort("Stock", sortOrder, onSort)}
              scope="col"
            >
              Stock
            </th>
            <th
              onClick={() => handleSort("Rate", sortOrder, onSort)}
              scope="col"
            >
              Rate
            </th>
            <th
              onClick={() => handleSort("Liked", sortOrder, onSort)}
              scope="col"
            />
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => {
            const {
              _id: id,
              title,
              genre,
              numberInStock: stock,
              dailyRentalRate: rate,
              liked = false,
            } = movie;
            return (
              <tr key={id}>
                <th scope="row">{title}</th>
                <td>{genre.name}</td>
                <td>{stock}</td>
                <td>{rate}</td>
                <td>
                  <Like
                    liked={liked}
                    onLike={() => handleLike(movie, onLike)}
                  ></Like>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(id, onDelete)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </React.Fragment>
  );
};
export default Movies;

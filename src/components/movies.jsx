import React from "react";
import Like from "./like";

const Movies = (props) => {
  if (props.movies.length === 0) return <p>No More Movies</p>;
  return movieTable(props);
};

const handleLike = (movie, onLike) => {
  console.log("pass like " + movie);
  onLike(movie);
};

const handleDelete = (id, onDelete) => {
  console.log("pass delete " + id);
  onDelete(id);
};

const movieTable = ({ movies, onLike, onDelete }) => {
  return (
    <React.Fragment>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Genre</th>
            <th scope="col">Stock</th>
            <th scope="col">Rate</th>
            <th scope="col" />
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

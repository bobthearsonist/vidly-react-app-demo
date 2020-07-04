import React, { Component } from "react";
import TableHeader from "./tableHeader";
import Like from "./like";

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
    { title: "Title", path: "title" },
    { title: "Genre", path: "genre.name" },
    { title: "Stock", path: "numberInStock" },
    { title: "Rate", path: "dailyRentalRate" },
    { title: "Liked", path: "liked", sortable: false, hideTitle: true },
    { title: "Delete", sortable: false, hideTitle: true },
  ];

  movieTable = ({ movies, onLike, onDelete, sortOrder, onSort }) => {
    return (
      <React.Fragment>
        <table className="table">
          <TableHeader
            columns={this.columns}
            sortOrder={sortOrder}
            onSort={onSort}
          ></TableHeader>
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
                      onLike={() => this.handleLike(movie, onLike)}
                    ></Like>
                  </td>
                  <td>
                    <button
                      onClick={() => this.handleDelete(id, onDelete)}
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
}

export default Movies;

import React, { Component } from "react";
import Like from "./common/like";
const Movie = (props) => {
  const {
    _id: id,
    title,
    genre,
    numberInStock,
    dailyRentalRate,
    liked,
  } = props;
  return (
    <tr key={id}>
      <td>{title}</td>
      <td>{genre.name}</td>
      <td>{numberInStock}</td>
      <td>{dailyRentalRate}</td>
      <td>
        <Like liked={liked} onClick={() => props.nLike(id)}></Like>
      </td>
      <td>
        <button
          className="btn btn-danger btn-sm active"
          onClick={() => {
            console.log("onDelete");
            props.onDelete(id);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Movie;

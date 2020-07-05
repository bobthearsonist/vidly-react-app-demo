import React from "react";

export default function Movie({ match }) {
  return <h1>Movie Form + {match.params.id}</h1>;
}

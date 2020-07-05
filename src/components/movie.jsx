import React from "react";
import { Link } from "react-router-dom";

export default function Movie({ match, history }) {
  return (
    <div>
      <h1>Movie Form + {match.params.id}</h1>
      <input
        onClick={() => history.goBack()}
        type="button"
        className="btn btn-primary"
        value="Save"
      />
    </div>
  );
}

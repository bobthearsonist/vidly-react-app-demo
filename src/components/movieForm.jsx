import React from "react";

export default function MovieForm({ match, history }) {
  return (
    <div>
      <h1>Movie Form + {match.params.id}</h1>
      <input
        onClick={() => history.push("/movies")}
        type="button"
        className="btn btn-primary"
        value="Save"
      />
    </div>
  );
}

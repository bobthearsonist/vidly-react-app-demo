import React from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function MovieForm() {
  const params = useParams();
  const navigate = useNavigate();
  return (
    <div>
      <h1>Movie Form + {params.id}</h1>
      <input
        onClick={() => navigate("/movies")}
        type="button"
        className="btn btn-primary"
        value="Save"
      />
    </div>
  );
}

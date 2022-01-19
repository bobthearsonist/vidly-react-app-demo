import React from "react";

export default function Input({
  name,
  label,
  error,
  type = "string",
  ...rest
}) {
  return (
    <div className="mb-3">
      <label htmlFor={name}>{label}</label>
      <input
        {...rest}
        name={name}
        type={type}
        autoFocus
        className="form-control"
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
}

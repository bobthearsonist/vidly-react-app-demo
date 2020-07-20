import React from "react";

export default function Input({
  onChange,
  name,
  label,
  value,
  error,
  type = "text",
}) {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        autoFocus
        id={name}
        name={name}
        className="form-control"
        type={type}
        value={value}
        onChange={onChange}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
}

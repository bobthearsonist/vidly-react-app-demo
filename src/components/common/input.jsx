import React from "react";

export default function Input({ onChange, name, label, value }) {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        autoFocus
        id={name}
        name={name}
        className="form-control"
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

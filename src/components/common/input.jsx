import React from "react";

export default function Input({ id, label, onChange, autofocus, value, type }) {
  return (
    <div className="mb-3" key={id + "form field"}>
      <label className="form-label" htmlFor={id} key={id + "label"}>
        {label}
      </label>
      <input
        className="form-control"
        autoFocus={autofocus}
        value={value}
        onChange={(e) => onChange(e)}
        id={id}
        label={label}
        name={id}
        type={type}
        key={id + "input"}
      />
    </div>
  );
}

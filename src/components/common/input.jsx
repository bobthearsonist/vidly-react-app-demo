import React from "react";
import { PropTypes } from "prop-types";

function Input({ id, label, onChange, autofocus, value, type, errors }) {
  console.log(errors);
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
      {errors && <div className="alert alert-danger">{errors}</div>}
    </div>
  );

  // eslint-disable-next-line no-unreachable
  Input.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    fields: PropTypes.arrayOf(PropTypes.object).isRequired,
    data: PropTypes.object.isRequired,
  };
}

export default Input;

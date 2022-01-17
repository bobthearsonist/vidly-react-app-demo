import React from "react";
import { PropTypes } from "prop-types";

export default function Form({ data, fields, onSubmit, onChange, submitText }) {
  return (
    <form onSubmit={(e) => onSubmit(e)}>
      {fields.map((field) => (
        <div className="mb-3" key={field.id + "form field"}>
          <label
            className="form-label"
            htmlFor={field.id}
            key={field.id + "label"}
          >
            {field.Label}
          </label>
          <input
            className="form-control"
            autoFocus={field.autofocus}
            value={data[field.name]}
            onChange={(e) => onChange(e)}
            id={field.id}
            label={field.label}
            name={field.id}
            type={field.type}
            key={field.id + "input"}
          />
        </div>
      ))}
      <button type="submit" className="btn btn-primary">
        {submitText}
      </button>
    </form>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  fields: PropTypes.arrayOf(PropTypes.object).isRequired,
  data: PropTypes.object.isRequired,
};

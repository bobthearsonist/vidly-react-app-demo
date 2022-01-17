import React from "react";
import { PropTypes } from "prop-types";
import Input from "./input";

export default function Form({ data, fields, onSubmit, onChange, submitText }) {
  return (
    <form onSubmit={(e) => onSubmit(e)}>
      {fields.map((field) => (
        <Input
          {...field}
          value={data[field.id]}
          onChange={onChange}
          key={field.id}
        />
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

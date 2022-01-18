import React from "react";
import { PropTypes } from "prop-types";
import Input from "./input";
import _ from "lodash";

export default function Form({
  data,
  fields,
  errors,
  onSubmit,
  onChange,
  submitText,
}) {
  return (
    <form onSubmit={(e) => onSubmit(e)}>
      {fields.map((field) => (
        <Input
          {...field}
          value={data[field.id]}
          onChange={onChange}
          key={field.id}
          errors={errors[field.id]}
        />
      ))}
      <button
        type="submit"
        className="btn btn-primary"
        disabled={_.isEmpty(errors)}
      >
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

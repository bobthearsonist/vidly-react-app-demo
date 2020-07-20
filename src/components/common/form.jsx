import React, { Component } from "react";
import Joi from "@hapi/joi";
import _ from "lodash";
import Input from "./input";

export default class Form extends Component {
  validate = () => {
    const { schema, data } = this.props;

    const options = { abortEarly: false };
    const { error: errors } = Joi.object(schema).validate(data, options);

    if (!errors) return null;

    console.log({ errors });

    return Object.fromEntries(
      errors.details.map((error) => [error.path[0], error.message])
    );
  };

  validateProperty = ({ name, value }) => {
    const { schema } = this.props;
    const options = { abortEarly: false };
    const propertySchema = { [name]: schema[name] };
    const object = { [name]: value };
    const { error: errors } = Joi.object(propertySchema).validate(
      object,
      options
    );

    if (_(errors).isNil()) return {};

    console.log({ errors });

    return Object.fromEntries(
      errors.details.map((error) => [error.path[0], error.message])
    );
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { data, schema, onSubmit } = this.props;
    const errors = this.validate(data, schema);

    onSubmit(data, errors);
  };

  handleChange = ({ currentTarget: input }) => {
    const { onChange, data } = this.props;
    const errors = this.validateProperty(input);
    let updatedData = { ...data };
    updatedData[input.name] = input.value;
    onChange({ data: updatedData, errors });
  };

  renderButton = (label) => {
    return (
      <button className="btn btn-primary" disabled={this.validate()}>
        {label}
      </button>
    );
  };

  renderInput = (field, index, data, errors) => {
    return (
      <Input
        key={field.name + index}
        onChange={this.handleChange}
        name={field.name}
        label={field.label}
        value={data[field.name]}
        error={errors[field.name]}
      />
    );
  };

  render() {
    const { data, errors, fields, buttonLabel } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        {fields.map((field, index) =>
          this.renderInput(field, index, data, errors)
        )}
        {this.renderButton(buttonLabel)}
      </form>
    );
  }
}

import Form from "./form";
import React, { Component } from "react";
import PropTypes from "prop-types";

export default class BaseForm extends Component {
  state = {
    data: {},
    errors: {},
  };

  componentDidMount() {
    const data = Object.fromEntries(
      this.fields.map((field) => [field.name, field.default])
    );
    this.setState({ data });
  }

  handleSubmit = (data, errors) => {
    errors && this.setState({ errors });

    if (errors) return;

    this.doSubmit(data);
  };

  handleChange = ({ data, errors }) => {
    this.setState({ data, errors });
  };

  doSubmit = (_) => {
    throw new Error("must implement abstract method");
  };

  render() {
    const { data, errors } = this.state;
    return (
      <div>
        <h1>{`${this.label} Form`}</h1>
        <Form
          onSubmit={(data) => this.handleSubmit(data)}
          onChange={(data, errors) => this.handleChange(data, errors)}
          fields={this.fields}
          data={data}
          errors={errors}
          schema={this.schema}
          buttonLabel={this.label}
        />
      </div>
    );
  }
}

Form.propTypes = {
  schema: PropTypes.object.isRequired,
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      name: PropTypes.string,
      default: PropTypes.any,
    })
  ).isRequired,
};

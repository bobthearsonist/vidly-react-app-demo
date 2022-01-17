import React, { Component } from "react";
import Form from "./common/form";

export default class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    console.log("login submitted");
  };

  loginFields = [
    {
      autofocus: true,
      label: "Username",
      id: "username",
      type: "text",
    },
    {
      label: "Password",
      id: "password",
      type: "password",
    },
  ];

  render() {
    const { account } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <Form
          onSubmit={(e) => this.handleSubmit(e)}
          onChange={(e) => this.handleChange(e)}
          data={account}
          fields={this.loginFields}
          submitText="Login"
        />
      </div>
    );
  }
}

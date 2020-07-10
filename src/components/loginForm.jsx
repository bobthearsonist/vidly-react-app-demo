import React, { Component } from "react";
import Input from "./common/input";

export default class loginForm extends Component {
  state = {
    account: { username: "", password: "" },
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const username = this.username.current.value;
    //call the server
    console.log("login form submitted " + username);
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  render() {
    const { account } = this.state;
    return (
      <div>
        <h1>Login Form</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            onChange={this.handleChange}
            name="username"
            label="Username"
            value={account.username}
          />
          <Input
            onChange={this.handleChange}
            name="password"
            label="Password"
            value={account.password}
          />
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

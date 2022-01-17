import React, { Component } from "react";

export default class LoginForm extends Component {
  render() {
    return (
      <div>
        <h1>Login</h1>
        <form>
          <div className="mb-3">
            <label className="form-label" htmlFor="username">
              Username
            </label>
            <input className="form-control" label="username" type="text" />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="password">
              Password
            </label>
            <input className="form-control" id="password" type="text" />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    );
  }
}

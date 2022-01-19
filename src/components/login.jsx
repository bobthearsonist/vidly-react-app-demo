import React from "react";
import LoginForm from "./loginForm";
import RegisterForm from "./registerForm";
import { NavTab } from "react-router-tabs";
import { Switch, Route, Redirect } from "react-router-dom";

export default function Login({ match }) {
  return (
    <React.Fragment>
      <ul className="nav nav-tabs">
        <NavTab className="nav nav-link" to={`${match.path}/login-form`}>
          Login
        </NavTab>
        <NavTab className="nav nav-link" to={`${match.path}/register-form`}>
          Register
        </NavTab>
      </ul>
      <Switch>
        <Redirect exact from="/login/" to={`${match.path}/login-form`} />
        <Route path={`${match.path}/login-form`} component={LoginForm} />
        <Route path={`${match.path}/register-form`} component={RegisterForm} />
      </Switch>
    </React.Fragment>
  );
}

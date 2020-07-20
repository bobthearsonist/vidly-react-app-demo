import Joi from "@hapi/joi";
import BaseForm from "./common/baseForm";

const strongPasswordRegex = new RegExp(
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])"
);

export default class LoginForm extends BaseForm {
  schema = {
    username: Joi.string().required().min(3).max(20).token().label("Username"),
    password: Joi.string()
      .required()
      .min(8)
      .pattern(strongPasswordRegex)
      .message(
        "Must contain at least one number, one uppercase letter, one lowercase letter, and a symbol [!@#$%^&*]"
      )
      .label("Password"),
  };

  fields = [
    { name: "username", label: "Username", default: "" },
    { name: "password", label: "Password", default: "" },
  ];

  label = "Login";

  doSubmit = ({ data: account }) => {
    //call the server
    console.log("login form submitted");
    console.log({ account });
  };
}

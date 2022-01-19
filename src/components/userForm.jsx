import Joi from "@hapi/joi";
import BaseForm from "./common/baseForm";

const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d])(?=.*[!@#$%^&*])/;
export default class UserForm extends BaseForm {
  schema = {
    username: Joi.string()
      .required()
      .email({ tlds: { allow: false } })
      .label("Username"),
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
    {
      name: "password",
      label: "Password",
      type: "password",
      default: "",
    },
  ];
}

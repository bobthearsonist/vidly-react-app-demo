import Joi from "@hapi/joi";
import UserForm from "./userForm";

export default class RegisterForm extends UserForm {
  schema = {
    ...super.schema,
    name: Joi.string().required().trim().label("Username"),
  };

  //fields = [...super.fields, { name: "name", label: "Name", default: "" }];

  label = "Register";

  doSubmit = ({ data: account }) => {
    //call the server
    console.log("login form submitted");
  };
}

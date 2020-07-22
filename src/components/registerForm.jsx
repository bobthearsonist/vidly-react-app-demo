import Joi from "@hapi/joi";
import UserForm from "./userForm";

export default class RegisterForm extends UserForm {
  schema = {
    ...this.schema,
    name: Joi.string().required().label("Name"),
  };

  fields = [...this.fields, { name: "name", label: "Name", default: "" }];

  label = "Register";

  doSubmit = ({ data: account }) => {
    //call the server
    console.log("registration form submitted");
  };
}

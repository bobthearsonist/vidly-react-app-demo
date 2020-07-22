import UserForm from "./userForm";

export default class LoginForm extends UserForm {
  label = "Login";
  doSubmit = ({ data: account }) => {
    //call the server
    console.log("login form submitted");
  };
}

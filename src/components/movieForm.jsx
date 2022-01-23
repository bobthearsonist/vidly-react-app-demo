import BaseForm from "./common/baseForm";
import Joi from "@hapi/joi";
import { withRouter } from "../hocs";
import _ from "lodash";

class MovieForm extends BaseForm {
  // TODO add focus so you can select which gets focus
  fields = [
    { name: "title", label: "Title" },
    { name: "genre", label: "Genre" },
    {
      name: "numberInStock",
      label: "Stock",
    },
    {
      name: "dailyRentalRate",
      label: "Rate",
    },
  ];

  state = {
    data: Object.fromEntries(this.fields.map((field) => [field.name, ""])),
    errors: {},
  };

  newMovie = {
    title: null,
    genre: { name: "" },
    numberInStock: 0,
    dailyRentalRate: 0.0,
  };

  componentDidMount = () => {
    const { state: data = this.newMovie } = this.props.location;

    this.setState({ data });
  };

  schema = {
    title: Joi.string().required().label("Title"),
    genre: Joi.string().required().label("Genre"),
    numberInStock: Joi.number().integer().positive().required().label("Stock"),
    dailyRentalRate: Joi.number().required().precision(2).label("Rate"),
  };

  label = "Save";

  onSubmit = (data, errors) => {
    const { location, navigate } = this.props;
    // const { errors } = this.state;
    console.log({ data, location, errors });
    this.onSave({ ...data, location });
    navigate("/movies");
  };
}

export default withRouter(MovieForm);

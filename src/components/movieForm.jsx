import BaseForm from "./common/baseForm";
import Joi from "@hapi/joi";
import { useParams, useNavigate } from "react-router-dom";

export default class MovieForm extends BaseForm {
  fields = [
    { name: "title", label: "Title" },
    { name: "genreId", label: "Genre" },
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

  onComponentDidMount = () => {
    const params = useParams();
    const { movie } = this.props;
    this.setState({ movie });
  };

  schema = {
    title: Joi.string().required().label("Title"),
    genre: Joi.string().required().label("Genre"),
    stock: Joi.number().integer().positive().required().label("Stock"),
    rate: Joi.number().required().precision(2).label("Rate"),
  };

  label = "Save";

  doSubmit = () => {
    const navigate = useNavigate();
    const { data, errors } = this.state;
    console.log({ data, errors });
    navigate("/movies");
  };
}

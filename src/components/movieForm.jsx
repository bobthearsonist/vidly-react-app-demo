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

  newMovie = {
    title: null,
    genre: { name: "" },
    numberInStock: 0,
    dailyRentalRate: 0.0,
  };

  onComponentDidMount = () => {
    const params = useParams();
    const { movie = this.newMovie } = this.props;
    this.setState({ movie });
  };

  schema = {
    title: Joi.string().required().label("Title"),
    genre: Joi.string().required().label("Genre"),
    stock: Joi.number().integer().positive().required().label("Stock"),
    rate: Joi.number().required().precision(2).label("Rate"),
  };

  label = "Save";

  doSubmit = (data) => {
    const navigate = useNavigate();
    const params = useParams();
    const { errors } = this.state;
    console.log({ data, params, errors });
    this.onSave({ ...data, params });
    navigate("/movies");
  };
}

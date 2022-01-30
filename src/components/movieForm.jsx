import BaseForm from "./common/baseForm";
import Joi from "@hapi/joi";
import { withRouter } from "../hocs";
import _ from "lodash";
import { getGenres } from "../services/fakeGenreService";

class MovieForm extends BaseForm {
  // TODO add focus so you can select which gets focus
  fields = [
    { name: "title", label: "Title" },
    {
      name: "genre",
      label: "Genre",
      options: [],
    },
    {
      name: "numberInStock",
      label: "Stock",
    },
    {
      name: "dailyRentalRate",
      label: "Rate",
    },
  ];

  constructor() {
    super();
    const genres = getGenres();

    console.log(this.fields);

    const index = _(this.fields).findIndex((field) => field.name === "genre");
    const genre = { ...this.fields[index], options: genres };
    this.fields.splice(index, 1, genre);

    this.state.genres = genres;
  }

  state = {
    data: {},
    errors: {},
    genres: [],
  };

  newMovie = {
    title: null,
    genreId: "",
    numberInStock: 0,
    dailyRentalRate: 0.0,
  };

  componentDidMount = () => {
    const { state: data = this.newMovie } = this.props.location;
    const genres = this.state.genres ?? getGenres();

    // TODO validate form on load if existing movie
    // const errors = this.validate(data, this.schema);

    this.setState({ data, genres });
  };

  schema = {
    _id: Joi.string().required(),
    title: Joi.string().required().label("Title"),
    genre: Joi.object().required().label("Genre"),
    numberInStock: Joi.number().integer().positive().required().label("Stock"),
    dailyRentalRate: Joi.number().required().precision(2).label("Rate"),
  };

  label = "Save";

  doSubmit = (data, errors) => {
    const { location, navigate } = this.props;
    // const { errors } = this.state;
    console.log({ data, location, errors });
    this.onSave({ ...data, location });
    navigate("/movies");
  };
}

export default withRouter(MovieForm);

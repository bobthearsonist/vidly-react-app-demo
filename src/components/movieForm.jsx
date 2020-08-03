import BaseForm from "./common/baseForm";
import Joi from "@hapi/joi";

export default class MovieForm extends BaseForm {
  schema = {
    title: Joi.string().required().label("Title"),
    genre: Joi.string().required().label("Genre"),
    stock: Joi.number().integer().positive().required().label("Stock"),
    rate: Joi.number().required().precision(2).label("Rate"),
  };

  fields = () => {
    const { movie } = this.props.location.state;
    return [
      { name: "title", label: "Title", default: movie.title },
      { name: "genre", label: "Genre", default: movie.genre.name },
      { name: "stock", label: "Stock", default: movie.numberInStock },
      { name: "rate", label: "Rate", default: movie.dailyRentalRate },
    ];
  };

  label = "Save";

  doSubmit = () => {
    const { history } = this.props;
    const { data, errors } = this.state;
    console.log({ data, errors });
    history.push("/movies");
  };
}

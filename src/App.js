import React, { Component } from "react";
import "./App.css";
import Movies from "./components/movies";
import { getMovies, deleteMovie } from "./services/fakeMovieService";
import { getGenres } from "./services/fakeGenreService";
import Pagination from "./components/pagination";
import _ from "lodash";
import ListGroup from "./components/listGroup";

class App extends Component {
  state = {
    movies: [],
    genres: [],
    currentGenre: undefined,
    pageSize: 4,
    currentPage: 1,
  };

  allGenres = { name: "All Genres", _id: "all" };

  componentDidMount() {
    const genres = [this.allGenres, ...getGenres()];
    const currentGenre = this.allGenres;
    this.setState({
      movies: getMovies(),
      genres,
      currentGenre,
    });
  }

  handleDelete = (movieId) => {
    console.log("handle delete " + movieId);
    deleteMovie(movieId);
    this.setState({ movies: getMovies() });
  };

  handleLike = (movie) => {
    console.log("handle like " + movie.id);
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = (page) => {
    console.log("handle page event " + page);
    this.setState({ currentPage: page });
  };

  handleGenreSelect = (genre) => {
    console.log("handle genre select " + genre.name);
    this.setState({ currentGenre: genre });
  };

  render() {
    const { movies, pageSize, currentPage } = this.state;
    const { genres, currentGenre } = this.state;

    console.log(movies);
    console.log({ currentGenre });
    const filteredMovies =
      currentGenre === undefined || currentGenre === this.allGenres
        ? movies
        : _(movies)
            .filter((movie) => movie.genre._id === currentGenre._id)
            .value();

    const pagedMovies = _(filteredMovies)
      .slice((currentPage - 1) * pageSize)
      .take(pageSize)
      .value();

    const count = filteredMovies.length;

    return (
      <main className="container">
        <div className="row">
          <div className="col-3">
            <ListGroup
              items={genres}
              onItemSelect={(genre) => this.handleGenreSelect(genre)}
              selectedItem={currentGenre}
            />
          </div>
          <div className="col">
            <h2>{count} Movies</h2>
            <Movies
              movies={pagedMovies}
              onLike={(movie) => this.handleLike(movie)}
              onDelete={(id) => this.handleDelete(id)}
            />
            <footer>
              <Pagination
                itemsCount={count}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={(page) => this.handlePageChange(page)}
              />
            </footer>
          </div>
        </div>
      </main>
    );
  }
}

export default App;

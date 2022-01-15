import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Pagination from "./common/pagination";
import Movie from "./movie";
import _ from "lodash";
import { getGenres } from "../services/fakeGenreService";

class Movies extends Component {
  state = {
    movies: getMovies(),
    pageSize: 3,
    currentPage: 1,
    sortBy: "Title",
    genres: getGenres(),
    currentGenre: this.allGenres,
    currentSort: { path: "title", order: "asc" },
  };

  allGenres = { name: "All Genres", _id: "all" };

  handleDelete = (id) => {
    const movies = this.state.movies.filter((m) => m._id !== id);
    this.setState({ movies });
  };

  handleLiked = (id) => {
    const movies = [...this.state.movies];
    const index = movies.findIndex((m) => m._id === id);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = (page) => {
    const currentPage = page;
    console.log(currentPage);
    this.setState({ currentPage });
  };

  handleGenreSelect = (genre) => {
    const currentGenre = genre;
    this.setState({ currentGenre });
  };

  handleSort = (field) => {
    const determineSortOrder = () => {
      return this.state.currentSort[1] === "asc" ? "desc" : "asc";
    };

    const currentSort = [
      field,
      this.state.currentSort[0] === field ? determineSortOrder() : "asc",
    ];

    console.log(currentSort);

    this.setState({ currentSort });
    this.handlePageChange(1);
  };

  getData = () => {
    const { currentGenre, pageSize, currentPage, movies, currentSort } =
      this.state;

    const filteredMovies =
      currentGenre === undefined || currentGenre === this.allGenres
        ? movies
        : _(movies)
            .filter((movie) => movie.genre._id === currentGenre._id)
            .value();

    const sortedMovies = _(filteredMovies).orderBy(currentSort);

    const pagedMovies = _(sortedMovies)
      .slice(pageSize * (currentPage - 1))
      .take(pageSize)
      .value();

    return pagedMovies;
  };

  render() {
    const { length: count } = this.state.movies;
    const { pageSize, currentPage, sortBy } = this.state;

    if (count === 0) return <p> No Movies Available</p>;

    return (
      <React.Fragment>
        <span className="container">
          <div className="row">
            <div className="col-2">
              <ul className="list-group">
                <button
                  type="button"
                  className="list-group-item list-group-item-action"
                  onClick={() => this.handleGenreSelect("All")}
                >
                  All Genres
                </button>
                {this.state.genres.map((g) => (
                  <button
                    type="button"
                    onClick={(g) => this.handleGenreSelect(g.name)}
                    className="list-group-item list-group-item-action"
                  >
                    {g.name}
                  </button>
                ))}
              </ul>
            </div>
            <div className="col">
              <div className="row">
                <div className="col-1">
                  <span className="badge bg-secondary">{count}</span>
                </div>
                <div className="col">
                  <span>Movies Available</span>
                </div>
              </div>
              <table className="table">
                <thead>
                  <tr>
                    <th onClick={() => this.handleSort("title")}>Title</th>
                    <th onClick={() => this.handleSort("genre._id")}>Genre</th>
                    <th onClick={() => this.handleSort("numberInStock")}>
                      Stock
                    </th>
                    <th onClick={() => this.handleSort("dailyRentalRate")}>
                      Rate
                    </th>
                    <th onClick={() => this.handleSort("like")}>Like</th>
                  </tr>
                </thead>
                <tbody>
                  {this.getData().map((movie) => (
                    <Movie
                      {...movie}
                      key={movie._id}
                      id={movie._id}
                      onDelete={(id) => this.handleDelete(id)}
                      onLike={(id) => this.handleLiked(id)}
                    />
                  ))}
                </tbody>
              </table>
              <Pagination
                itemsCount={count}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={(page) => this.handlePageChange(page)}
              />
            </div>
          </div>
        </span>
      </React.Fragment>
    );
  }
}

export default Movies;

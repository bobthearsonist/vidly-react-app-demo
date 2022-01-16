import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Pagination from "./common/pagination";
import _ from "lodash";
import { getGenres } from "../services/fakeGenreService";
import ListGroup from "./common/listGroup";
import MoviesTable from "./moviesTable";

class Movies extends Component {
  state = {
    movies: [],
    pageSize: 5,
    currentPage: 1,
    sortBy: "Title",
    genres: [],
    currentGenre: this.allGenres,
    currentSort: { path: "title", order: "asc" },
  };

  allGenres = { name: "All Genres", _id: "all" };

  componentDidMount() {
    this.setState({ movies: getMovies(), genres: getGenres() });
  }

  handleDelete = (id) => {
    const movies = this.state.movies.filter((m) => m._id !== id);
    this.setState({ movies });
  };

  handleLike = (id) => {
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
    console.log(currentGenre);
    this.setState({ currentGenre });
  };

  handleSort = (currentSort) => {
    console.log(currentSort);

    this.setState({ currentSort });
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

    const sortedMovies = _(filteredMovies).orderBy(
      currentSort.path,
      currentSort.order
    );

    const pagedMovies = _(sortedMovies)
      .slice(pageSize * (currentPage - 1))
      .take(pageSize)
      .value();

    return { data: pagedMovies, count: filteredMovies.length };
  };

  render() {
    const { data: movies, count } = this.getData();
    const { pageSize, currentPage, currentSort } = this.state;

    if (count === 0) return <p> No Movies Available</p>;

    return (
      <React.Fragment>
        <span className="container">
          <div className="row">
            <div className="col-2">
              <ListGroup
                items={[this.allGenres, ...this.state.genres]}
                selectedItem={this.state.currentGenre}
                onItemSelect={(genre) => this.handleGenreSelect(genre)}
              />
            </div>
            <div className="col">
              <MoviesTable
                movies={movies}
                count={count}
                onLike={(id) => this.handleLike(id)}
                onDelete={(id) => this.handleDelete(id)}
                onSort={(sort) => this.handleSort(sort)}
                currentSort={currentSort}
              />
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

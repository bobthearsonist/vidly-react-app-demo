import React, { Component } from "react";
import ListGroup from "./common/listGroup";
import Pagination from "./common/pagination";
import { getMovies, deleteMovie } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import _ from "lodash";
import Table from "./common/table";
import Like from "./common/like";
import { Link } from "react-router-dom";

export default class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    currentGenre: undefined,
    pageSize: 4,
    currentPage: 1,
    sortOrder: { path: "title", order: "asc" },
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
    this.setState({ currentGenre: genre, currentPage: 1 });
  };

  handleSort = (selectedSortOrder) => {
    console.log("handle sort");
    this.setState({ sortOrder: selectedSortOrder });
  };

  columns = [
    {
      content: (movie) => <Link to={`/movie/${movie._id}`}>{movie.title}</Link>,
      label: "Title",
      path: "title",
    },
    { label: "Genre", path: "genre.name" },
    { label: "Stock", path: "numberInStock" },
    { label: "Rate", path: "dailyRentalRate" },
    {
      path: "liked",
      content: (movie) => (
        <Like
          liked={movie.liked}
          onLike={() => this.handleLike(movie, this.props.onLike)}
        />
      ),
      hideLabel: true,
    },
    {
      content: (movie) => (
        <button
          onClick={() => this.handleDelete(movie._id, this.props.onDelete)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      ),
      sortable: false,
      hideLabel: true,
    },
  ];

  render() {
    const {
      pageSize,
      currentPage,
      sortOrder,
      genres,
      currentGenre,
    } = this.state;

    const { totalCount, pagedMovies } = this.getData();

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
            {totalCount === 0 ? (
              <p>No More Movies</p>
            ) : (
              <React.Fragment>
                <h2>{totalCount} Movies</h2>
                <Table
                  columns={this.columns}
                  data={pagedMovies}
                  sortOrder={sortOrder}
                  onSort={(selectedSort) => this.handleSort(selectedSort)}
                  onDelete={(id) => this.handleDelete(id)}
                  onLike={(movie) => this.handleLike(movie)}
                />
              </React.Fragment>
            )}
            <footer>
              <Pagination
                itemsCount={totalCount}
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

  getData() {
    const {
      movies,
      pageSize,
      currentPage,
      sortOrder,
      currentGenre,
    } = this.state;

    const filteredMovies =
      currentGenre === undefined || currentGenre === this.allGenres
        ? movies
        : _(movies)
            .filter((movie) => movie.genre._id === currentGenre._id)
            .value();

    const sortedMovies = _(filteredMovies).orderBy(
      sortOrder.path,
      sortOrder.order
    );

    const pagedMovies = _(sortedMovies)
      .slice((currentPage - 1) * pageSize)
      .take(pageSize)
      .value();

    return { totalCount: filteredMovies.length, pagedMovies };
  }
}

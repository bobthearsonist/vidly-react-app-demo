import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Pagination from "./common/pagination";
import Movie from "./movie";
import _ from "lodash";

class Movies extends Component {
  state = {
    movies: getMovies(),
    pageSize: 3,
    currentPage: 1,
    sortBy: "Title",
  };

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

  render() {
    const { length: count } = this.state.movies;
    const { pageSize, currentPage, sortBy } = this.state;

    if (count === 0) return <p> No Movies Available</p>;

    return (
      <React.Fragment>
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
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th>Like</th>
            </tr>
          </thead>
          <tbody>
            {_(this.state.movies)
              .slice(pageSize * (currentPage - 1))
              .take(pageSize)
              .value()
              .map((movie) => (
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
      </React.Fragment>
    );
  }
}

export default Movies;

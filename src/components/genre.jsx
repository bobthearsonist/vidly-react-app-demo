/* eslint-disable no-lone-blocks */
import React from "react";

export const AllGenre = { name: "All Genres", _id: "all" };

const Genre = ({ genres, currentGenre: activeGenre, onGenreSelect }) => {
  return (
    <div>
      <button
        key="all"
        type="button"
        className={getGenreClasses(AllGenre, activeGenre)}
        onClick={() => onGenreSelect(AllGenre)}
      >
        All
      </button>
      {genres.map((genre) => {
        return (
          <button
            key={genre._id}
            type="button"
            className={getGenreClasses(genre, activeGenre)}
            onClick={() => onGenreSelect(genre)}
          >
            {genre.name}
          </button>
        );
      })}
    </div>
  );
};

const getGenreClasses = (genre, activeGenre) => {
  const baseClasses = "list-group-item list-group-item-action";
  return activeGenre._id === genre._id ? baseClasses + " active" : baseClasses;
};

export default Genre;

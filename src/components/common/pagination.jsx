/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import _ from "lodash";

const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
  const numberOfPages = itemsCount / pageSize + 1;

  if (Math.floor(numberOfPages) === 0) return null;

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {_.range(1, numberOfPages).map((page) => {
          return (
            <li key={page} className="page-item">
              <a className="page-link" onClick={() => onPageChange(page)}>
                {page}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;

import PropTypes from "prop-types";

/* eslint-disable jsx-a11y/anchor-is-valid */
const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
  return (
    <nav>
      <ul className="pagination">
        {Array.from(Array(Math.ceil(itemsCount / pageSize))).map(
          (page, index) => (
            <li
              key={index + 1}
              className={
                page === currentPage ? "page-item active" : "page-item"
              }
            >
              <a
                id={index + 1}
                href="#"
                className="page-link"
                onClick={() => {
                  onPageChange(index + 1);
                }}
              >
                {index + 1}
              </a>
            </li>
          )
        )}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;

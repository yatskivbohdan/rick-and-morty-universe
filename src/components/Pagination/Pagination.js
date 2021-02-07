import "./Pagination.scss";

import { PropTypes } from "prop-types";
import _ from "lodash";
import { ReactComponent as Arrow } from "../../assets/icons/arrow-right.svg";

const Pagination = ({ pages, currentPage, setCurrentPage }) => {
  const getDisplayedPages = () => {
    const minPage = Math.max(currentPage - 2, 0);
    const maxPage = Math.min(minPage + 4, pages);
    if (currentPage + 2 >= pages) return _.range(Math.max(0, Math.max(pages - 5)), pages);
    if (currentPage - 2 <= 0) return _.range(0, Math.min(5, pages));
    return _.range(minPage, maxPage + 1);
  };
  const handleClick = (page, isClickable = true) => () => {
    if (!isClickable) return;
    setCurrentPage(page);
  };
  const renderPage = (page) => {
    const isActive = page === currentPage;
    return (
      <div
        onClick={handleClick(page)}
        className={`Pagination__page ${isActive ? "Pagination__page_active" : ""}`}
        key={page}
      >
        {page + 1}
      </div>
    );
  };
  const renderArrow = (isPrev = false) => {
    const nextPage = isPrev ? currentPage - 1 : currentPage + 1;
    const isArrowClickable = !(nextPage < 0 || nextPage >= pages);
    return (
      <div className="Pagination__page" onClick={handleClick(nextPage, isArrowClickable)}>
        <Arrow
          className={`Pagination__arrow ${isPrev ? "Pagination__arrow_prev" : ""} ${
            isArrowClickable ? "Pagination__arrow_active" : ""
          }`}
        />
      </div>
    );
  };
  return (
    <div className="Pagination">
      {renderArrow(true)}
      {_.map(getDisplayedPages(), renderPage)}
      {renderArrow()}
    </div>
  );
};

Pagination.propTypes = {
  pages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};
export default Pagination;

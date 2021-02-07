import "./Search.scss";
import { PropTypes } from "prop-types";
import { ReactComponent as SearchIcon } from "../../assets/icons/search-icon.svg";

const Search = ({ className, value, setValue, searchValue }) => {
  const hanleChange = ({ target: { value } }) => {
    if (value === "") searchValue(value);
    setValue(value);
  };
  const handleClick = () => {
    searchValue(value);
  };
  return (
    <div className={`Search__${className}`}>
      <SearchIcon className="Search__icon" />
      <input className="Search__input" placeholder="search by name" value={value} onChange={hanleChange} />
      <button className="Search__button" onClick={handleClick}>
        Find Character
      </button>
    </div>
  );
};

Search.propTypes = {
  className: PropTypes.string.isRequired,
  value: PropTypes.string,
  setValue: PropTypes.func,
  searchValue: PropTypes.func,
};

export default Search;

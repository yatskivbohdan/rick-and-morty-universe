import "./Search.scss";
import { PropTypes } from "prop-types";
import { ReactComponent as SearchIcon } from "../../assets/icons/search-icon.svg";

const Search = ({ className, value, setValue }) => {
  const handleChange = ({ target: { value } }) => {
    setValue(value);
  };
  return (
    <div className={`Search__${className}`}>
      <SearchIcon className="Search__icon" />
      <input className="Search__input" placeholder="search by name" value={value} onChange={handleChange} />
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

import "./Tag.scss";
import { PropTypes } from "prop-types";

const Tag = ({ emoji, text }) => {
  return (
    <div className="Tag">
      <span className="Tag__emoji">{emoji}</span>
      <span className="Tag__text">{text}</span>
    </div>
  );
};

Tag.propTypes = {
  emoji: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Tag;

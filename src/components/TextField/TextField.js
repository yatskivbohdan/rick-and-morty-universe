import "./TextField.scss";
import { PropTypes } from "prop-types";

const TextField = ({ label, text }) => {
  return (
    <div className="TextField">
      <div className="TextField__label">{label}</div>
      <div className="TextField__text">{text}</div>
    </div>
  );
};

TextField.propTypes = {
  label: PropTypes.string.isRequired,
  text: PropTypes.string,
};

export default TextField;

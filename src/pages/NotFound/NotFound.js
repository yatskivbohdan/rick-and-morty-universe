import "./NotFound.scss";
import { PropTypes } from "prop-types";

function NotFound({ className }) {
  return (
    <div className={`NotFound ${className}`}>
      <div className="NotFound__errorContainer">
        <div className="NotFound__errorCode">404</div>
        <div className="NotFound__text">Not found</div>
      </div>
    </div>
  );
}

NotFound.propTypes = {
  className: PropTypes.string,
};

export default NotFound;

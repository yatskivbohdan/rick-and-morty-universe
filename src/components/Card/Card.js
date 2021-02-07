import "./Card.scss";

import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Tag from "../Tag";
import TextField from "../TextField";
import { statusEmojis, genderEmojis } from "../../utils";
import { getEpisodeByUrl } from "../../api";

const Card = ({ id, name, status, gender, location, image, episode }) => {
  const [firstEpisode, setFirstEpisode] = useState();
  useEffect(() => {
    loadEpisode(episode[0]);
  }, [episode]);

  const loadEpisode = async (url) => {
    const item = await getEpisodeByUrl(url);
    setFirstEpisode(item?.name);
  };
  return (
    <div className="Card">
      <div className="Card__image">
        <Link className="Card__link" to={`/character/${id}`}>
          <img className="Card__image" alt="Character" src={image} />
        </Link>
      </div>
      <div className="Card__info">
        <Link className="Card__link" to={`/character/${id}`}>
          <div className="Card__name">{name}</div>
        </Link>
        <div className="Card__tags">
          <Tag emoji={statusEmojis[status]} text={status} />
          <Tag emoji={genderEmojis[gender]} text={gender} />
        </div>
        <div className="Card__text-fields">
          <TextField label="Last known location:" text={location.name} />
          <TextField label="First seen in:" text={firstEpisode} />
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.oneOf(["unknown", "Alive", "Dead"]),
  gender: PropTypes.oneOf(["Male", "Female", "unknown", "Genderless"]),
  location: PropTypes.shape({
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
  image: PropTypes.string.isRequired,
  episode: PropTypes.array.isRequired,
};

export default Card;

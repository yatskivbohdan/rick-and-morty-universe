import "./DetailedCharacter.scss";

import { Link, NavLink, useParams } from "react-router-dom";
import { useState, useEffect, useLayoutEffect } from "react";
import DateTime from "luxon/src/datetime.js";
import Tag from "../../components/Tag";
import TextField from "../../components/TextField";
import { statusEmojis, genderEmojis } from "../../utils";
import { getCharacter, getEpisodes } from "../../api";
import UnknownImage from "../../assets/images/unknown-image.jpeg";

const DetailedCharacter = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState();
  const [episodeList, setEpisodeList] = useState([]);
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    loadCharacter(id);
  }, [id]);
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  const loadCharacter = async (id) => {
    let [character, episodes] = await Promise.all([getCharacter(id), getEpisodes()]);
    setCharacter(character);
    setEpisodeList(character.episode);
    setEpisodes(episodes);
  };

  const { name, status, gender, species, origin, created, image, location } = character || {
    name: "Loading...",
    status: "Loading...",
    gender: "Loading...",
    species: "Loading...",
    origin: "Loading...",
    created: "Loading...",
    image: UnknownImage,
    location: "Loading...",
  };

  const renderEpisode = (episode) => {
    const splited = episode?.split("/");
    const ep = episodes[Number(splited?.[splited?.length - 1] - 1)];
    return (
      <Link className="DetailedCharacter__episodeLink" to={`/episode/${ep?.id}`}>
        <div key={ep?.id}>{ep ? `${ep.episode}: ${ep.name}` : "Loading..."}</div>
      </Link>
    );
  };

  return character ? (
    <div className="DetailedCharacter">
      <div className="DetailedCharacter__links">
        <NavLink className="DetailedCharacter__link" activeClassName="DetailedCharacter__link_active" exact to="/">
          Home
        </NavLink>
        <div className="DetailedCharacter__link_active">{"|"}</div>
        <NavLink
          className="DetailedCharacter__link"
          activeClassName="DetailedCharacter__link_active"
          exact
          to={`/character/${id}`}
        >
          {name}
        </NavLink>
      </div>

      <div className="DetailedCharacter__card">
        <div className="DetailedCharacter__photo">
          <img className="DetailedCharacter__image" src={image} />
        </div>
        <div className="DetailedCharacter__info">
          <h1 className="DetailedCharacter__name">{name}</h1>
          <div className="DetailedCharacter__tags">
            <Tag emoji={statusEmojis[status]} text={status} />
            <Tag emoji={genderEmojis[gender]} text={gender} />
          </div>
          <div className="DetailedCharacter__text-fields">
            <div className="DetailedCharacter__info-container">
              <TextField label="Species:" text={species} />
              <TextField label="Origin:" text={origin.name} />
              <TextField
                label="Birthday:"
                text={DateTime.fromISO(created).setLocale("en-GB").toLocaleString(DateTime.DATE_MED)}
              />
              <TextField label="Last known location:" text={location.name} />
              <TextField label="First seen in:" text={renderEpisode(episodeList[0])} />
            </div>
            <div className="DetailedCharacter__info-container">
              <TextField label="Episodes:" text={episodeList.map(renderEpisode)} />
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="DetailedCharacter">Error 404: Not Found</div>
  );
};

export default DetailedCharacter;

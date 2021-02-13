import "./DetailedCharacter.scss";

import { Link, NavLink, useParams } from "react-router-dom";
import { useState, useEffect, useLayoutEffect } from "react";
import DateTime from "luxon/src/datetime.js";
import Tag from "../../components/Tag";
import TextField from "../../components/TextField";
import { statusEmojis, genderEmojis } from "../../utils";
import { getCharacter, getEpisodes } from "../../api";
import NotFound from "../NotFound";
import Loader from "../../components/Loader";

const DetailedCharacter = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState();
  const [episodeList, setEpisodeList] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    loadCharacter(id);
  }, [id]);
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  const loadCharacter = async (id) => {
    const [character, episodes] = await Promise.all([getCharacter(id), getEpisodes()]);
    setCharacter(character);
    setEpisodeList(character.episode);
    setEpisodes(episodes);
    setIsLoaded(true);
  };

  const { name, status, gender, species, origin, created, image, location } = character || {};
  const error = character?.error ? true : false;
  const formatted_date = DateTime.fromISO(created).setLocale("en-GB").toLocaleString(DateTime.DATE_MED);
  const renderEpisode = (episode) => {
    const splited = episode?.split("/");
    const ep = episodes[Number(splited?.[splited?.length - 1] - 1)];
    return (
      <Link className="DetailedCharacter__episodeLink" to={`/episode/${ep?.id}`}>
        <div key={ep?.id}>{ep ? `${ep.episode}: ${ep.name}` : "Loading..."}</div>
      </Link>
    );
  };
  // console.log(character);
  return isLoaded ? (
    !error ? (
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
                <TextField label="Birthday:" text={formatted_date} />
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
      <NotFound />
    )
  ) : (
    <Loader />
  );
};

export default DetailedCharacter;

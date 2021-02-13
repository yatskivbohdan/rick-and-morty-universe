import "./DetailedEpisode.scss";

import { useState, useEffect, useLayoutEffect } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import NotFound from "../NotFound";
import Loader from "../../components/Loader";
import TextField from "../../components/TextField";
import { getAllCharacters, getEpisode } from "../../api";

const DetailedEpisode = () => {
  const { id } = useParams();
  const [currentEpisode, setCurrentEpisode] = useState();
  const [characterList, setCharacterList] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    loadEpisode(id);
  }, [id]);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  const loadEpisode = async (id) => {
    const [episode, characters] = await Promise.all([getEpisode(id), getAllCharacters()]);
    setCurrentEpisode(episode);
    setCharacterList(episode.characters);
    setCharacters(characters);
    setIsLoaded(true);
  };

  const { name, episode, air_date } = currentEpisode || {};
  const error = currentEpisode?.error ? true : false;
  const renderCharacter = (character) => {
    const splited = character?.split("/");
    const charac = characters[Number(splited?.[splited?.length - 1] - 1)];
    return (
      <Link className="DetailedEpisode__characterLink" to={`/character/${charac?.id}`}>
        <div key={charac?.id}>{charac ? `${charac.name}` : "Loading..."}</div>
      </Link>
    );
  };

  return isLoaded ? (
    !error ? (
      <div className="DetailedEpisode">
        <div className="DetailedEpisode__links">
          <NavLink className="DetailedEpisode__link" activeClassName="DetailedEpisode__link_active" exact to="/">
            Home
          </NavLink>
          <div className="DetailedEpisode__link_active">{"|"}</div>
          <NavLink
            className="DetailedEpisode__link"
            activeClassName="DetailedEpisode__link_active"
            exact
            to={`/episode/${id}`}
          >
            {`${episode} : ${name}`}
          </NavLink>
        </div>

        <div className="DetailedEpisode__card">
          <div className="DetailedEpisode__photo">
            <div className="DetailedEpisode__image">#{episode}</div>
          </div>
          <div className="DetailedEpisode__info">
            <h1 className="DetailedEpisode__name">{name}</h1>
            <div className="DetailedEpisode__text-fields">
              <div className="DetailedEpisode__info-container">
                <TextField label="Air date:" text={air_date} />
              </div>
              <div className="DetailedEpisode__info-container">
                <TextField label="Characters:" text={characterList.map(renderCharacter)} />
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

export default DetailedEpisode;

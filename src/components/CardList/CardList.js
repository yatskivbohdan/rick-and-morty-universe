import "./CardList.scss";

import { PropTypes } from "prop-types";
import { useState, useEffect } from "react";
import Card from "../Card";
import Pagination from "../Pagination";
import { getCharacters } from "../../api";

const CardList = ({ name, gender, status }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [characters, setCharacters] = useState([]);
  const [pages, setPages] = useState(0);

  const loadCharacters = async (page = 0, params) => {
    const items = await getCharacters({ page: page + 1, ...params });
    setCharacters(items?.results);
    setPages(items?.info?.pages || 0);
  };

  useEffect(() => {
    setCurrentPage(0);
  }, [name, status, gender]);

  useEffect(() => {
    loadCharacters(currentPage, {
      ...(name && { name }),
      ...(gender && { gender }),
      ...(status && { status }),
    });
  }, [name, gender, status, currentPage]);

  const renderCharacter = (character) => <Card key={character.id} {...character}></Card>;

  return (
    <div className="CardList">
      <div className="CardList__users">{characters?.map(renderCharacter)}</div>
      <Pagination pages={pages} setCurrentPage={setCurrentPage} currentPage={currentPage} />
    </div>
  );
};

CardList.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.oneOf(["", "unknown", "Alive", "Dead"]),
  gender: PropTypes.oneOf(["", "Male", "Female", "unknown", "Genderless"]),
};

export default CardList;

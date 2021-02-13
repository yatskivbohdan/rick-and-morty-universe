import "./Home.scss";

import { useState, useCallback } from "react";
import _ from "lodash";
import Select from "../../components/Select";
import Search from "../../components/Search";
import CardList from "../../components/CardList";
import { statusOptions, genderOptions } from "../../utils";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { ReactComponent as ToTheTop } from "../../assets/icons/toTheTop.svg";

function Home() {
  const [name, setName] = useState("");
  const [inputName, setInputName] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const delayedQuery = useCallback(_.debounce(setInputName, 500), [setInputName]);

  const onNameChange = (value) => {
    setName(value);
    delayedQuery(value);
  };

  return (
    <div className="Home">
      <h1 className="Home__header">
        <span>surf the</span>
        <Logo className="Home__logo" />
        <span>universe</span>
      </h1>
      <Search className="hero" value={name} setValue={onNameChange} />
      <div className="Home__filters">
        <Select value={status} onSelect={setStatus} options={statusOptions} label="Status:" />
        <Select value={gender} onSelect={setGender} options={genderOptions} label="Gender: " />
      </div>
      <div className="Home__resultContainer">
        <CardList className="Home__cardsList" name={inputName} status={status} gender={gender}></CardList>
      </div>
      <ToTheTop onClick={scrollTop} className="Home__toTheTop" />
    </div>
  );
}

export default Home;

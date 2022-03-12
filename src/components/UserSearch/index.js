import { useState, useEffect } from "react";
import UsersFetch from "../../service/user";

import { server } from "../../config/server";
import { useDataUser } from "../../context/User";

import imgGit from "../../assets/github.png";

import "./style.scss";

function UsersSearch() {
  const { DATA_USER, SET_DATA_USER } = useDataUser();

  const [user, setUser] = useState([]);
  const [nameUser, setNameUser] = useState("");
  const [CODE_ACESS, SET_CODE_ACESS] = useState("");
  const [BEARER_TOKEN, SET_BEARER_TOKEN] = useState("");

  useEffect(() => {
    SET_CODE_ACESS(window.location.href.split("=")[1]);
    getToken();
  }, [CODE_ACESS]);

  async function getToken() {
    try {
      if (localStorage.getItem("token")) {
        SET_BEARER_TOKEN(localStorage.getItem("token"));
      } else if (CODE_ACESS === "") {
        return;
      } else {
        const { data } = await server.post(`/token/${CODE_ACESS}`);
        const x = data.split("&")[0].split("=");
        localStorage.setItem("token", `${x[1]}`);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function getUser(nameUser) {
    try {
      SET_BEARER_TOKEN(localStorage.getItem("token"));
      const dataUser = await UsersFetch.getUser(nameUser, BEARER_TOKEN);
      setUser(dataUser);
      SET_DATA_USER(dataUser);

      Object.assign(DATA_USER, dataUser);
    } catch (error) {
      console.log(error);
    }
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      getUser(nameUser);
    }
  }

  return (
    <div className="container-search">
      <div className="container-search__image">
        <img
          className="container-search__img"
          src={
            user.avatar_url === undefined ||
            user.avatar_url === "" ||
            user.avatar_url === null
              ? imgGit
              : user.avatar_url
          }
          width="150"
          height="150"
        />
      </div>

      <div className="container-search__result">
        <div className="container-search__result__content">
          <h3>Usuario: {user.name === null ? user.login : user.name}</h3>
          <h4>Localização: {user.location === null ? "..." : user.location}</h4>
          <h4>Bio: {user.bio === null ? "..." : user.bio}</h4>
        </div>
      </div>

      <div className="container-search__form">
        <div className="container-search__form__content">
          <input
            type="text"
            value={nameUser}
            placeholder={"Username"}
            onChange={({ target }) => setNameUser(target.value)}
            onKeyPress={handleKeyPress}
          ></input>
          <p>press enter to search</p>
          <button>
            <a href="/detailedResult">Detailed Result</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default UsersSearch;

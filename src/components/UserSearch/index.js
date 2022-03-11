import { useState, useEffect } from "react";

import UsersFetch from "../../service/user";

import { http } from "../../config/axios";
import imgGit from "../../assets/github.png";
import "./style.scss";

function UsersSearch() {
  const [user, setUser] = useState([]);
  const [nameUser, setNameUser] = useState("");

  useEffect(() => {
    const CODE_ACESS = window.location.href.split("=")[1];
    console.log(CODE_ACESS);
    // http://localhost:3000/searchusers?code=cb481178985b6606e0fd
  }, []);

  async function getUser(nameUser) {
    const dataUser = await UsersFetch.getUser(nameUser);
    setUser(dataUser);
    console.log(user, "aqui132");
  }

  async function teste() {
    const { data } = await http.post(
      "https://github.com/login/oauth?client_id=b0af5e7950abe1036b7f&client_secret=406b42ace8b615e5441a4a7447205974b6452873&código=d4fedbb6db45b62c957e"
    );
    console.log(data);
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
          <h5>Desde: {user.created_at === null ? "..." : user.created_at}</h5>
        </div>
      </div>

      <div className="container-search__form">
        <div className="container-search__form__content">
          <input
            type="text"
            value={nameUser}
            placeholder={"Username"}
            onChange={({ target }) => setNameUser(target.value)}
          ></input>
          <button onClick={() => teste()}>Buscar</button>
        </div>
      </div>
    </div>
  );
}

export default UsersSearch;

import { useState } from "react";
import { Link } from "react-router-dom";

import { useDataUser, useDataRepo, useDataStarred } from "../../context/User";

import imgGit from "../../assets/github.png";
import "../DetailedResult/style.scss";

function DetailedResult() {
  const [listRepo, setListRepo] = useState(false);
  const [listStarred, setListStarred] = useState(false);

  const { DATA_USER } = useDataUser();
  const { DATA_REPO } = useDataRepo();
  const { DATA_STARRED } = useDataStarred();

  function fillListRepo() {
    setListRepo(true);
  }

  function fillListStarred() {
    setListStarred(true);
  }

  return (
    <div className="container__general__detailedresult">
      <div className="container__general__content__detailedresult">
        <section className="container__general__detailedresult__user">
          <div className="container__general__detailedresult__content__img">
            <img
              alt=""
              src={
                DATA_USER.avatar_url === undefined ||
                DATA_USER.avatar_url === "" ||
                DATA_USER.avatar_url === null
                  ? imgGit
                  : DATA_USER.avatar_url
              }
              width="180"
              height="180"
            />
          </div>
          <div>
            <h1>
              Username:
              {DATA_USER.name === "" ? DATA_USER.login : DATA_USER.name}
            </h1>
            <div className="container__general__detailedresult__buttons">
              <button onClick={() => fillListRepo()}>List Repo</button>
              <button
                className="container__general__detailedresult__buttons__return"
                onClick={() => fillListRepo()}
              >
                <Link to={"/searchusers"}>Return</Link>
              </button>
              <button onClick={() => fillListStarred()}>List Starred</button>
            </div>
          </div>
        </section>
        <section className="container__general__detailedresult__info">
          <h1>Repo</h1>
          <div className="container__general__detailedresult__info__repo">
            {listRepo === true
              ? DATA_REPO.map((e) => {
                  return (
                    <div className="container__general__detailedresult__info__repo__result">
                      <ul key={e.id}>
                        <li>{e.name}</li>
                      </ul>
                    </div>
                  );
                })
              : ""}
          </div>
          <div className="container__general__detailedresult__info__starred">
            <h1>Starreds</h1>

            <div className="container__general__detailedresult__info__repo">
              {listStarred === true
                ? DATA_STARRED.map((e) => {
                    return (
                      <div className="container__general__detailedresult__info__repo__result">
                        <p>{e.name}</p>
                      </div>
                    );
                  })
                : ""}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default DetailedResult;

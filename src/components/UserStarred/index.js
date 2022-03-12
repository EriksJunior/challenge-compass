import { useState } from "react";

import { useDataUser, useDataRepo } from "../../context/User";
import UsersFetch from "../../service/user";

import "../UserStarred/style.scss";

function UserRepo() {
  const { DATA_USER } = useDataUser();
  const { DATA_REPO, SET_DATA_REPO } = useDataRepo();
  const [detailsRepo, setDetailsRepo] = useState([]);

  async function getRepoByUser() {
    const bearerToken = localStorage.getItem("token");
    const data = await UsersFetch.getRepo(DATA_USER.login, bearerToken);
    SET_DATA_REPO(data[0].owner.login);
    setDetailsRepo(data);
  }

  return (
    <div className="container-starred">
      <div className="container-starred__title">
        <h1>Starred</h1>
      </div>

      <div className="container-starred__result">
        <div className="container-starred__result__content">
          <h3>Total Starreds: </h3>
        </div>
      </div>
      {DATA_USER.login === "" ? null : (
        <button onClick={() => getRepoByUser()}>List</button>
      )}
    </div>
  );
}

export default UserRepo;

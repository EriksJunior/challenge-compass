import { useState } from "react";

import { useDataUser, useDataRepo } from "../../context/User";
import UsersFetch from "../../service/user";

import "../UserRepo/style.scss";

function UserRepo() {
  const { DATA_USER } = useDataUser();
  const { DATA_REPO, SET_DATA_REPO } = useDataRepo();
  const [detailsRepo, setDetailsRepo] = useState([]);

  async function getRepoByUser() {
    const bearerToken = localStorage.getItem("token");
    const data = await UsersFetch.getRepo(DATA_USER.login, bearerToken);
    SET_DATA_REPO(data[0].owner.login);
    setDetailsRepo(data);
    console.log(detailsRepo);
  }

  return (
    <div className="container-repo">
      <div className="container-repo__title">
        <h1>Repos</h1>
      </div>

      <div className="container-repo__result">
        <div className="container-repo__result__content">
          <h3>
            Total repos:
            {DATA_USER.login === DATA_REPO ? detailsRepo.length : "0"}
          </h3>
        </div>
      </div>
      {DATA_USER.login === "" ? null : (
        <button onClick={() => getRepoByUser()}>List</button>
      )}
    </div>
  );
}

export default UserRepo;

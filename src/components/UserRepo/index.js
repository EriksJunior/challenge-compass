import { useState, useEffect } from "react";

import { useDataUser, useDataRepo } from "../../context/User";
import UsersFetch from "../../service/user";

import "../UserRepo/style.scss";

function UserRepo() {
  const { DATA_USER } = useDataUser();
  const [zeroValue, setZeroValue] = useState(0);
  const { SET_DATA_REPO } = useDataRepo();

  useEffect(() => {
    setZeroValue(0);
  }, [DATA_USER]);

  async function getRepoByUser() {
    const bearerToken = localStorage.getItem("token");
    const data = await UsersFetch.getRepo(DATA_USER.login, bearerToken);
    setZeroValue(data.length);
    SET_DATA_REPO(data);
    console.log(DATA_USER, "repoooooooo");
  }

  return (
    <div className="container-repo">
      <div className="container-repo__title">
        <h1>Repos</h1>
      </div>

      <div className="container-repo__result">
        <div className="container-repo__result__content">
          <h3>Total repos: {zeroValue}</h3>
        </div>
      </div>
      {DATA_USER.login === "" ? null : (
        <button onClick={() => getRepoByUser()}>Click To List</button>
      )}
    </div>
  );
}

export default UserRepo;

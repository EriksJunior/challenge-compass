import { useState } from "react";
import { useDataUser } from "../../context/User";
import UsersFetch from "../../service/user";

import "../UserStarred/style.scss";

function UserRepo() {
  const { DATA_USER } = useDataUser();
  const [detailsStarred, setDetailsStarred] = useState([]);

  async function getRepoByUser() {
    const bearerToken = localStorage.getItem("token");
    const data = await UsersFetch.getStarred(DATA_USER.login, bearerToken);
    setDetailsStarred(data);
    console.log(data);
  }

  return (
    <div className="container-starred">
      <div className="container-starred__title">
        <h1>Starred</h1>
      </div>

      <div className="container-starred__result">
        <div className="container-starred__result__content">
          <h3>Total Starreds: {detailsStarred.length}</h3>
        </div>
      </div>
      {DATA_USER.login === "" ? null : (
        <button onClick={() => getRepoByUser()}>List</button>
      )}
    </div>
  );
}

export default UserRepo;

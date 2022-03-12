import { useState, useEffect } from "react";
import { useDataUser, useDataStarred } from "../../context/User";
import UsersFetch from "../../service/user";

import "../UserStarred/style.scss";

function UserStarred() {
  const { DATA_USER } = useDataUser();
  const [zeroValue, setZeroValue] = useState(0);
  const { SET_DATA_STARRED } = useDataStarred();

  useEffect(() => {
    setZeroValue(0);
  }, [DATA_USER]);

  async function getStarredByUser() {
    const bearerToken = localStorage.getItem("token");
    const data = await UsersFetch.getStarred(DATA_USER.login, bearerToken);
    setZeroValue(data.length);
    SET_DATA_STARRED(data);
  }

  return (
    <div className="container-starred">
      <div className="container-starred__title">
        <h1>Starred</h1>
      </div>

      <div className="container-starred__result">
        <div className="container-starred__result__content">
          <h3>Total Starreds: {zeroValue}</h3>
        </div>
      </div>
      {DATA_USER.login === "" ? null : (
        <button onClick={() => getStarredByUser()}>Click To List</button>
      )}
    </div>
  );
}

export default UserStarred;

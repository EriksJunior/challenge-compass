import { useState, useEffect } from "react";
import { useDataUser } from "../../context/User";
import UsersFetch from "../../service/user";

import "../UserStarred/style.scss";

function UserStarred() {
  const { DATA_USER } = useDataUser();
  const [detailsStarred, setDetailsStarred] = useState([]);
  const [zeroValue, setZeroValue] = useState(0);

  useEffect(() => {
    setZeroValue(0);
  }, [DATA_USER]);

  async function getStarredByUser() {
    const bearerToken = localStorage.getItem("token");
    const data = await UsersFetch.getStarred(DATA_USER.login, bearerToken);
    setDetailsStarred(data);
    setZeroValue(data.length);
    console.log(data);
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

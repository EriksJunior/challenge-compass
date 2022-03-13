import { useDataUser, useDataRepo, useDataStarred } from "../../context/User";

import imgGit from "../../assets/github.png";
import "../DetailedResult/style.scss";
import UserProvider from "../../context/User";

function DetailedResult() {
  const { DATA_USER } = useDataUser();
  const { DATA_REPO } = useDataRepo();
  const { DATA_STARRED } = useDataStarred();

  function teste() {
    console.log(DATA_USER, "quiiiiiiiiiiiiiii");
  }
  return (
    <div className="container__general__detailedresult">
      <div className="container__general__content__detailedresult">
        <section className="container__general__detailedresult__user">
          <div className="container__general__detailedresult__content">
            <img
              className="container__general__detailedresult__content__img"
              alt=""
              src={imgGit}
              width="180"
              height="180"
            />
          </div>
        </section>
        <section className="container__general__detailedresult__info">
          <div className="container__general__detailedresult__info__repo">
            <button onClick={() => teste()}>Clicaaaaar</button>
          </div>
          <div className="container__general__detailedresult__info__starred">
            sdf
          </div>
        </section>
      </div>
    </div>
  );
}

export default DetailedResult;

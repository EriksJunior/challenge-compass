import "../UserRepo/style.scss";

function UserRepo() {
  return (
    <div className="container-repo">
      <div className="container-repo__title">
        <h1 className="ovo">Repos</h1>
      </div>

      <div className="container-repo__result">
        <div className="container-repo__result__content"></div>
      </div>
    </div>
  );
}

export default UserRepo;

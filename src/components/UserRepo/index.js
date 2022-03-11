import "./style.scss";

function UserRepo() {
  return (
    <div className="container-search">
      <div className="container-search__image">
        <img className="container-search__img" width="150" height="150" />
      </div>

      <div className="container-search__result">
        <div className="container-search__result__content">
          <h3>Usuario: </h3>
          <h4>Localização: </h4>
          <h4>Bio:</h4>
          <h5>Desde: </h5>
        </div>
      </div>

      <div className="container-search__form">
        <div className="container-search__form__content">
          <input type="text" placeholder={"Username"}></input>
          <button>Buscar</button>
        </div>
      </div>
    </div>
  );
}

export default UserRepo;

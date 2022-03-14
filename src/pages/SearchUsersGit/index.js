import UserSearch from "../../components/UserSearch";
import UserRepo from "../../components/UserRepo";
import UserStarred from "../../components/UserStarred";

import "./style.scss";

function SearchUsersGit() {
  return (
    <div className="container">
      <div className="container__content">
        <section className="container__section__user">
          <div className="content__section__card__user">
            <UserSearch />
          </div>
        </section>
        <div className="content__repo__and__starred">
          <section className="container__section__repo">
            <div className="content__section__card__repo">
              <UserRepo />
            </div>
          </section>
          <section className="container__section__starred">
            <div className="content__section__card__starred">
              <UserStarred />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default SearchUsersGit;

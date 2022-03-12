import { createContext, useState, useContext } from "react";

const UserContext = createContext([]);

export default function UserProvider({ children }) {
  const [DATA_USER, SET_DATA_USER] = useState({
    avatar_url: "",
    bio: "",
    blog: "",
    company: null,
    created_at: "",
    email: null,
    events_url: "",
    followers: 1,
    followers_url: "",
    following: 1,
    following_url: "",
    gists_url: "",
    gravatar_id: "",
    hireable: null,
    html_url: "",
    id: null,
    location: "",
    login: "",
    name: "",
    node_id: "",
    organizations_url: "",
    public_gists: null,
    public_repos: null,
    received_events_url: "",
    repos_url: "",
    site_admin: null,
    starred_url: "",
    subscriptions_url: "",
    twitter_username: null,
    type: "",
    updated_at: "",
    url: "",
  });

  const [DATA_REPO, SET_DATA_REPO] = useState([]);

  return (
    <UserContext.Provider
      value={{
        DATA_USER,
        SET_DATA_USER,
        DATA_REPO,
        SET_DATA_REPO,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useDataUser() {
  const context = useContext(UserContext);
  const { DATA_USER, SET_DATA_USER } = context;
  return { DATA_USER, SET_DATA_USER };
}

export function useDataRepo() {
  const context = useContext(UserContext);
  const { DATA_REPO, SET_DATA_REPO } = context;
  return { DATA_REPO, SET_DATA_REPO };
}

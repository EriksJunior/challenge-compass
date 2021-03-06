import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SearchUsersGit from "./pages/SearchUsersGit";
import DetailedResult from "./components/DetailedResult";
import LogIn from "./pages/LogIn";
import UserProvider from "./context/User";

import "./index.scss";

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/searchusers" element={<SearchUsersGit />} />
          <Route path="/" element={<LogIn />} />
          <Route path="/detailedresult" element={<DetailedResult />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

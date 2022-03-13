import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SearchUsersGit from "./pages/SearchUsersGit";
import DetailedResult from "./components/DetailedResult";
import LogIn from "./pages/LogIn";

import "./index.scss";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/searchusers" element={<SearchUsersGit />} />
        <Route path="/" element={<LogIn />} />
        <Route path="/detailedresult" element={<DetailedResult />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

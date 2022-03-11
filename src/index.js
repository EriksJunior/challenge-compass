import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SearchUsersGit from "./pages/SearchUsersGit";
import LogIn from "./pages/LogIn";

import "./index.scss";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/searchusers" element={<SearchUsersGit />} />
        <Route path="/" element={<LogIn />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

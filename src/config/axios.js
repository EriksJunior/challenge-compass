import axios from "axios";

const http = axios.create({
  baseURL: "https://api.github.com/users",
});

export { http };

const express = require("express");
const cors = require("cors");
const app = express();
const axios = require("axios");

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  app.use(cors());
  next();
});

app.post("/teste", async (req, res) => {
  try {
    const { data } = await axios.post(
      `https://github.com/login/oauth/access_token?client_id=b0af5e7950abe1036b7f&client_secret=1516d25623f7d4cb7d93001c5eb55730d7160128&código=cc22d980edaa80b9d1ce`
    );
    console.log(data, "aquiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
    return res.json({ teste: data });
  } catch (error) {
    console.log(error);
  }
});

async function teste() {
  try {
    // const CLIENT_ID = "b0af5e7950abe1036b7f";
    // const CLIENT_SECRET = "1516d25623f7d4cb7d93001c5eb55730d7160128";
    // const CODIGO = "cc22d980edaa80b9d1ce";
    // const REDIRECT_URI = "http://localhost:3000/searchusers";

    const { data } = await axios.post(
      `https://github.com/login/oauth/access_token?client_id=b0af5e7950abe1036b7f&client_secret=1516d25623f7d4cb7d93001c5eb55730d7160128&código=cc22d980edaa80b9d1ce`
    );
    //github.com/login/oauth/access_token?client_id=b0af5e7950abe1036b7f&client_secret=1516d25623f7d4cb7d93001c5eb55730d7160128&código=cc22d980edaa80b9d1ce FUNCIONOUUUUUUUUUUUUUUU
    console.log(data, "aqui nessa merda");
  } catch (error) {
    console.log(error);
  }
}

app.listen(3000, () => {
  console.log("servidor rodando na porta 3000");
});

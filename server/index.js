const express = require("express");
const app = express();

const axios = require("axios");
const cors = require("cors");

app.use(cors());

app.get("/", async function (req, res) {
  return res.json({ meu: "ovo" });
});

app.post("/token/:code", async function (req, res) {
  try {
    const teste = req.params;
    const CLIENT_ID = "b0af5e7950abe1036b7f";
    const CLIENT_SECRET = "1516d25623f7d4cb7d93001c5eb55730d7160128";
    const CODIGO = "";

    const { data } = await axios.post(
      `https://github.com/login/oauth/access_token?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&code=${CODIGO}`
    );
    //github.com/login/oauth/access_token?client_id=b0af5e7950abe1036b7f&client_secret=1516d25623f7d4cb7d93001c5eb55730d7160128&código=cc22d980edaa80b9d1ce FUNCIONOUUUUUUUUUUUUUUU
    console.log(teste, "aqui nessa merda");
  } catch (error) {
    console.log(error);
  }
});

app.listen(8081, () => {
  console.log("servidor rodando na porta 8081");
});

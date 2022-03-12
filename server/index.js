const express = require("express");
const app = express();

const axios = require("axios");
const cors = require("cors");

app.use(cors());

app.post("/token/:code", async function (req, res) {
  try {
    const CODIGO = req.params.code;
    const CLIENT_ID = "b0af5e7950abe1036b7f";
    const CLIENT_SECRET = "1516d25623f7d4cb7d93001c5eb55730d7160128";

    const { data } = await axios.post(
      `https://github.com/login/oauth/access_token?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&code=${CODIGO}`
    );
    console.log(data);
  } catch (error) {
    console.log(error);
  }
});

app.listen(8081, () => {
  console.log("servidor rodando na porta 8081");
});

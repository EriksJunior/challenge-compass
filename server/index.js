const express = require("express");
const app = express();

const axios = require("axios");
const cors = require("cors");

app.use(cors());

app.post("/token/:code", async function (req, res) {
  try {
    const CODIGO = req.params.code;
    const CLIENT_ID = "";
    const CLIENT_SECRET = "";

    const bodyApi = {
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      code: CODIGO,
    };

    const { data } = await axios.post(
      `https://github.com/login/oauth/access_token`,
      bodyApi
    );
    return res.json(data);
  } catch (error) {
    console.log(error);
  }
});

app.listen(8081, () => {
  console.log("servidor rodando na porta 8081");
});

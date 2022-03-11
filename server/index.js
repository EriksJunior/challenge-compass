var axios = require("axios");

const express = require("express");
const app = express();

async function teste(req, res) {
  try {
    const GITHUB_AUTH_ACCESSTOKEN_URL =
      "https://github.com/login/oauth/access_token?";
    const CLIENT_ID = "b0af5e7950abe1036b7f";
    const CLIENT_SECRET = "1516d25623f7d4cb7d93001c5eb55730d7160128";
    const CODIGO = "96e5bbafa7c3600db01b";

    axios({
      method: "post",
      url: GITHUB_AUTH_ACCESSTOKEN_URL,
      data: {
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        código: CODIGO,
      },
    })
      .then(function (response) {
        console.log("Success " + response.data);
      })
      .catch(function (error) {
        console.error("Error " + error.message);
      });
  } catch (error) {
    console.log(error);
  }
}

teste();

app.listen(3000, () => {
  console.log("servidor rodando na porta 3000");
});

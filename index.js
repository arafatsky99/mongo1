const express = require("express");
const { connectmongodb } = require("./mongo_connect");
const { savepost } = require("./post");
const { nargisdata } = require("./nargis");
const { save_get_kirevai, kirevaiall } = require("./kire_vai");
const app = express();

connectmongodb();
//savepost();

// nargisdata();

save_get_kirevai();

app.get("/", async (request, response) => {
  const kk = await kirevaiall();
  response.send(kk);
});

app.listen(4000, () => {});

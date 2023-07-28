const express = require("express");

const expressConfig = require('./config/express.js')
const config = require("./config/config.js");
const app = express()

expressConfig(app)

app.get("/", (req, res) => {
  res.render("home", { layout: false });
});

app.listen(config.PORT, () => {
  console.log(`Server is running on ${config.PORT}!`);
});

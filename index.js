const express = require("express");

const expressConfig = require("./config/express.js");
const config = require("./config/config.js");
const routes = require("./router.js");
const app = express();

expressConfig(app);
app.use(routes);

app.listen(config.PORT, () => {
  console.log(`Server is on ${config.PORT}!`);
});

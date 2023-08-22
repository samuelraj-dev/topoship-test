require("./config/db");
require("dotenv/config");

const app = require("express")();
const cors = require("cors");
const bodyParser = require("express").json();
const routes = require("./api/v1/routes");

// cors
app.use(cors());
// for accepting post form data
app.use(bodyParser);
// reference middleware
app.use((req, res, next) => {
  console.log(req.method, req.url)
  next()
})
// registering routes
app.use(routes);

module.exports = app;

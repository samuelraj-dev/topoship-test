// require("./config/db");

const express = require("express")
require('dotenv/config')
const cors = require("cors");
// const bodyParser = require("express").json();
// const routes = require("./routes");
const app = express();
const port = process.env.PORT;

// cors
app.use(cors());
// for accepting post form data
app.use((req, res, next) => {
  console.log(req.method, req.url)
  next()
})
app.use(express.json());
// reference
// registering routes
// app.use(routes);
// app.get('/', (req,res) => {
//   res.status(200).json({ message: "hello" })
// })


const startServer = () => {
  app.listen(port, () => {
    console.log(`server running on port ${port}`);
  });
};

startServer();

app.get('/', (req, res) => {
  res.status(200).send({ message: "hello" })
})
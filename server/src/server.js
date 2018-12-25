const express = require("express");
const app = express();
const setupRoutes = require("./router");
const sequelize = require("./sequelize");
const seeder = require("./seeder");
const cors = require("cors");

const port = 3001;

const morgan = require("morgan");
const bodyParser = require("body-parser");

app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cors());

setupRoutes(app);

sequelize
  .sync({ force: true })
  .then(() => {
    process.env.NODE_ENV !== "production" ? seeder() : null;
  })
  .then(() => {
    app.listen(port, () => {});
  });

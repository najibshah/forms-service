require("dotenv").config({ path: "./config.env" });
const express = require("express");
const cors = require("cors");
const database = require("../config/connection");
const forms = require("../routes/forms");
const bodyParser = require("body-parser");
const { default: accessEnv } = require("./helpers/accessEnv");

const app = express();
const port = accessEnv("PORT") || 4343;

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

// Routes
app.use("/", forms);

// Database connection
database.connectToServer(function (err) {
  if (err) console.error(err);
});

// test routes
app.get("/", (req, res) => {
  res.send("You've reached the forms service");
});
app.post("/", (req, res) => {
  res.send("You've reached the forms service");
});
app.listen(port, () => {
  console.log(`Forms service is now running at port: ${port}`);
});

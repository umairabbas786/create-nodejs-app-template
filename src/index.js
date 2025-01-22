const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const loadRoutes = require("./loadRoutes");
const cors = require("cors");
const bodyParser = require("body-parser");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

loadRoutes(app);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

module.exports = app;

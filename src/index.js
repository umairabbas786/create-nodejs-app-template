const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const loadRoutes = require("./loadRoutes");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

loadRoutes(app);

module.exports = app;

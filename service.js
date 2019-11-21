// require
const express = require("express");
const path = require("path");
const app = express();
const router = express.Router();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
var morgan = require("morgan");

// Connect to MongoDB
require("./models");

//config
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(__dirname + "/views"));

//config
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("dev"));
//config router
app.use("/", require("./routes/router.js"));

//config server listen
module.exports.app = app;
// require
const express = require("express");
const path = require("path");
const app = express();
const router = express.Router();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
var morgan = require("morgan");
var { mongoURI } = require("./config");
const port = 3232;

// Connect to MongoDB
mongoose
    .connect("mongodb://localhost:27017/node-pakage", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

//config
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("dev"));

//config router
app.use("/", require("./index.js"));

//config server listen
app.listen(port, () => {
    console.log("server is listening on port: " + port);
});
// require
const express = require("express");
const path = require("path");
const app = express();
const router = express.Router();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
var morgan = require("morgan");

// Connect to MongoDB
mongoose
    .connect("mongodb://localhost:27017/data_suggest", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        autoIndex: false
    })
    .then(async data => {
        let listCollectionsName = [];
        await mongoose.connection.db.listCollections().toArray((err, data) => {
            if (err) {
                console.log(err);
            } else {
                data.map(item => {
                    listCollectionsName.push(item.name);
                });
            }
        });
        exports.listCollectionsName = listCollectionsName;
        console.log("MongoDB Connected");
    })
    .catch(err => console.log(err));

//config
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("dev"));

//config router
app.use("/", require("./routes/router.js"));

//config server listen
app.listen((port = 3232), () => {
    console.log("server is listening on port: " + port);
});
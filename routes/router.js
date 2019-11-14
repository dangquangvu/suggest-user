const express = require("express");
const router = express.Router();
const controller = require("../controllers");
const stream = require("../stream");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const DataSchema = require("../models/schema");
const listCollectionsName = require("../service");
//const TankSchema = require("../models/demoSchema");
const path = require("path");
var Promise = require("bluebird");
var fs = Promise.promisifyAll(require("fs"));
router.get("/", async(req, res) => {
    let list = listCollectionsName.listCollectionsName;
    let handler = async() => {
        let counter = 0;
        for (let i = 0; i < list; i++) {
            const Schema = mongoose.model(list[i], DataSchema.DataSchema);
            let count = await Schema.find({
                location: { $regex: "sim-phong-thuy", $options: "i" }
            }).countDocuments();
            counter = counter + count;
            console.log(counter);
        }
        return counter;
    };
    let data = await handler();
    console.log(data, 111);
    res.send("xxx");
});
module.exports = router;
//{ location: { $regex: /sim-phong-thuy/, $options: "i" } }
// $text: {
//     $search: /sim-phong-thuy/,
//     $options: "i"
// }
const express = require("express");
const router = express.Router();
const controller = require("../controllers");
const stream = require("../stream");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const DataSchema = require("../models/schema");
const Room = require("../models/room");
const listCollectionsName = require("../service");
let ValueQuery = require("../const").ValueQuery;
//const TankSchema = require("../models/demoSchema");
const path = require("path");
var Promise = require("bluebird");
var fs = Promise.promisifyAll(require("fs"));
router.get("/", async(req, res) => {
    let list = listCollectionsName.listCollectionsName;
    let counter = 0;
    ValueQuery.map(async item => {});
    // let location = "sim-theo-gia/tu-500-nghin-den-1-trieu";
    // let referer = "sim-tra-sau";
    // let data = await stream.handlerReferer(list, location, referer);
    // let handler = ValueQuery.map(async location => {
    //     let data2 = await stream.handlerLocation(list, location.pathCompact);
    //     return location.pathCompact + "       " + data2;
    // });
    // await Promise.all(handler).then(async result => {
    //     let i = 0;
    //     console.log(result);
    //     // await ValueQuery.map(item => {
    //     //     item.count = result[i];
    //     //     i++;
    //     // });
    // });
    // console.log(ValueQuery.length);
    // res.send("xxx");
});
module.exports = router;
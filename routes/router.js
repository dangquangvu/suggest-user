const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");
const stream = require("../stream");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const DataSchema = require("../models/schema");
const TankSchema = require("../models/demoSchema");
const path = require("path");
router.get("/", async(req, res) => {
    let data = await controller.promiseGetAllData();
    console.log(TankSchema.TankSchema);
    // .then(async data => {
    //     console.log(data);
    // let item = data.toString().split("\n");
    // for (let i = 0; i < item.length - 1; i++) {
    //     //await stream.sleep(10);
    //     let infor = JSON.parse(item[i]);
    //     try {
    //         await stream.parseData(infor);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    // console.log("end");
    //})
    //.catch(console.log("xxx"));
    res.send("xxx");
});

module.exports = router;
//let item = data.toString().split("\n");

// for (let i = 0; i < item.length - 1; i++) {
//     //await stream.sleep(10);
// let infor = JSON.parse(item[i]);
// await stream.parseData(infor);
// }
// console.log("end");
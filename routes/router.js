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
    console.log(data);
    var Tank = mongoose.model("Tanksssssss", TankSchema.Tank);
    const tank = new Tank();
    tank.name = "a";
    let saveD = await tank.save();
    if (saveD) {
        console.log("done");
    }
    // const tank = new Tank();
    // tank.location = "aaaaa";
    // tank.timestamp = "2019-10-29T19:02:09.000+00:00";
    // let saveD = await tank.save();
    // if (saveD) {
    //     console.log("done");
    // }
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
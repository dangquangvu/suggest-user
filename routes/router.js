const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");
const stream = require("../stream");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const DataSchema = require("../models/schema");
const TankSchema = require("../models/demoSchema");
const path = require("path");
var Promise = require("bluebird");
var fs = Promise.promisifyAll(require("fs"));
router.get("/", async(req, res) => {
    let data = await controller.promiseGetAllData();

    if (data) {
        for (let i = 0; i < data.length; i++) {
            let promises = [];
            let name = data[i][i].substring(11, 30);
            let firstItem = data[i];
            const Schema = mongoose.model(name, DataSchema.DataSchema);
            for (let x = 0; x < firstItem.length; x += 10) {
                let dataX = firstItem.slice(x, x + 10);
                await dataX.map(async item => {
                    await promises.push(stream.getPath(item));
                });
                await Promise.all(promises)
                    .then(async results => {
                        for (let i = 0; i < results.length; i++) {
                            await stream.sleep(100);
                            let item = results[i].toString().split("\n");
                            for (let j = 0; j < item.length - 1; j++) {
                                await stream.sleep(10);
                                let result = JSON.parse(item[j]);
                                await stream.parseData(result, Schema);
                            }
                        }
                    })
                    .catch(err => console.log(err));
                await stream.sleep(10);
                promises = [];
            }
        }
    }
    res.send("xxx");
});

module.exports = router;
// .then(async data => {
//     console.log(data);
// let item = data.toString().split("\n");
// for (let i = 0; i < item.length - 1; i++) {
//await stream.sleep(10);
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
//let item = data.toString().split("\n");

// for (let i = 0; i < item.length - 1; i++) {
//     //await stream.sleep(10);
// let infor = JSON.parse(item[i]);
// await stream.parseData(infor);
// }
// console.log("end");
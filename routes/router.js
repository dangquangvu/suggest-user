const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");
const stream = require("../stream");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const DataSchema = require("../models/schema");
//const TankSchema = require("../models/demoSchema");
const path = require("path");
var Promise = require("bluebird");
var fs = Promise.promisifyAll(require("fs"));
router.get("/", async(req, res) => {
    let data = await controller.promiseGetAllData();
    if (data) {
        for (let i = 0; i < data.length; i++) {
            let promises = [];
            let arrData = [];
            let name = data[i][i].substring(11, 30);
            let firstItem = data[i];
            const Schema = mongoose.model(name, DataSchema.DataSchema);
            for (let x = 0; x < firstItem.length; x += 100) {
                let dataX = firstItem.slice(x, x + 100);
                await dataX.map(async item => {
                    await promises.push(stream.getPath(item));
                });
                await Promise.all(promises)
                    .then(async results => {
                        for (let i = 0; i < results.length; i++) {
                            let item = results[i].toString().split("\n");
                            for (let j = 0; j < item.length - 1; j = j + 1) {
                                let result = JSON.parse(item[j]);
                                let dataFilter = stream.parseData(result);
                                arrData.push(dataFilter);
                            }

                            Tank.create(array, (err, _data) => {
                                console.log("done");
                                if (err) {
                                    console.log(err);
                                } else console.log(_data);
                            });
                            arrData = [];
                        }
                    })
                    .catch(err => console.log(err));
                await stream.sleep(10);
                promises = [];
            }
        }
        console.log("end");
    }
    res.send("xxx");
});

module.exports = router;
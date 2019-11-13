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
                            for (let j = 0; j < item.length - 1; j++) {
                                let result = JSON.parse(item[j]);
                                let dataFilter = stream.parseData(result);
                                if (dataFilter.hasOwnProperty("location") == true) {
                                    if (dataFilter.location != "" && dataFilter.referer != "") {
                                        console.log(dataFilter);
                                    } else if (
                                        parseInt(+dataFilter.location) == "NaN" &&
                                        parseInt(+dataFilter.referer) == "NaN"
                                    ) {
                                        console.log(dataFilter, 11);
                                    }
                                } else {
                                    //console.log("x");
                                }
                                //console.log(dataFilter);
                                arrData.push(dataFilter);
                            }
                            // mongoose
                            //     .model(name, DataSchema)
                            //     .insertMany(arrData, (err, _data) => {
                            //         if (err) {
                            //             console.log(err);
                            //         } else console.log("x");
                            //     });
                            arrData = [];
                        }
                    })
                    .catch(err => console.log(err));
                promises = [];
            }
        }
        console.log("end");
    }
    res.send("xxx");
});

module.exports = router;
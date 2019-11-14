const axios = require("axios");
const Tank = require("../models/demoSchema");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
processF = item => {
    n = item.indexOf("?");
    item = item.substring(0, n);
    let l = item.indexOf("/");
    let l1 = item.indexOf("/", parseInt(l + 3));
    item = item.substring(l1 + 1);
};
demo = async() => {
    // logstash - 2019 - 09 - 24;
    logstash20190924
        .find({ $text: { $search: "text to look for" } }, { score: { $meta: "textScore" } })
        .sort({ score: { $meta: "textScore" } });
};
demo();
// if (data) {
//     let handler = async() => {
//         for (let i = 0; i < data.length; i++) {
//             let promises = [];
//             let arrData = [];
//             let name = data[i][i].substring(11, 30);
//             let handlerName = stream.handlerName(name);
//             let firstItem = data[i];
//             const Schema = mongoose.model(name, DataSchema.DataSchema);
//             for (let x = 0; x < firstItem.length; x += 100) {
//                 let dataX = firstItem.slice(x, x + 100);
//                 await dataX.map(async item => {
//                     await promises.push(stream.getPath(item));
//                 });
//                 await Promise.all(promises)
//                     .then(async results => {
//                         for (let i = 0; i < results.length; i++) {
//                             let item = results[i].toString().split("\n");
//                             for (let j = 0; j < item.length - 1; j++) {
//                                 let result = JSON.parse(item[j]);
//                                 let dataFilter = stream.parseData(result);
//                                 if (dataFilter.hasOwnProperty("location") == true) {
//                                     if (dataFilter.location != "" && dataFilter.referer != "") {
//                                         arrData.push(dataFilter);
//                                     }
//                                     //console.log("y");
//                                 }
//                             }
//                             let Data = mongoose.model(handlerName, DataSchema.DataSchema);
//                             Data.insertMany(arrData, (err, _data) => {
//                                 if (err) {
//                                     console.log(err);
//                                 } else console.log("x");
//                             });
//                             arrData = [];
//                         }
//                     })
//                     .catch(err => console.log(err));
//                 promises = [];
//             }
//         }
//     };
//     await handler(data);
//     console.log("end");
// }

// const Schema = mongoose.model("logstash20190924", DataSchema.DataSchema);
// console.time("timer");
// let count = await Schema.find({
//     location: { $regex: "sim-theo-gia/duoi-500-nghin", $options: "i" }
// }).countDocuments();

// console.log(count);
// console.timeEnd("timer");
// res.send("xxx");
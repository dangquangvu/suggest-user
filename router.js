const express = require("express");
const router = express.Router();
const controller = require("./controller");
const DataSchema = require("./schema");
const stream = require("./stream");

router.get("/", (req, res) => {
    controller
        .promiseGetAllData()
        .then(async data => {
            console.log(data);
        })
        .catch(console.log("xxx"));
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
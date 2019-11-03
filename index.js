const express = require("express");
const router = express.Router();
const controller = require("./controller");
const DataSchema = require("./schema");

router.get("/", (req, res) => {
    controller
        .getAllImages()
        .then(async data => {
            let item = data.toString().split("\n");
            for (let i = 0; i < item.length - 1; i++) {
                let infor = JSON.parse(item[i]);
                let x = infor.dataLayer;
                if (x == undefined) {
                    x = {};
                }
                let dataInfor = new DataSchema();
                dataInfor.location = infor.location;
                dataInfor.referer = infor.referer;
                dataInfor.dataLayer = x;
                dataInfor.ip = infor.ip;
                dataInfor.uid = infor.uid;
                dataInfor.origin = infor.origin;
                //console.log(dataInfor);
                try {
                    let result = await dataInfor.save();
                    if (result) {
                        console.log("done");
                    } else {
                        console.log("err");
                    }
                } catch (error) {
                    console.log("xxx");
                }
            }
            console.log("end");
        })
        .catch(console.log("xxx"));

    // .catch(err => {
    //     console.log(err, 1111);
    // });
    res.send("xxx");
});

module.exports = router;
// let infor = JSON.parse(item);
//             let x = infor.dataLayer;
//             if (x == undefined) {
//                 x = {};
//             }
//             let dataInfor = new DataSchema();
//             dataInfor.location = infor.location;
//             dataInfor.referer = infor.referer;
//             dataInfor.dataLayer = x;
//             dataInfor.ip = infor.ip;
//             dataInfor.uid = infor.uid;
//             dataInfor.origin = infor.origin;
//             //console.log(dataInfor);
//             try {
//                 await dataInfor.save();
//             } catch (error) {
//                 console.log("xxx");
//             }
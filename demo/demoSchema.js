const Tank = require("../models/demoSchema");
const mongoose = require("mongoose");
var async = require("async");

demo = () => {
    var array = [
        { name: "jelly bean" },
        { name: "snickers" },
        { name: "jelly bean" },
        { name: "snickers" }
    ];
    let name = "Tankers";
    let Tank = mongoose.model(name, TankSchema);
    Tank.insertMany(array, (err, _data) => {
        if (err) {
            console.log(err);
        } else console.log("x");
    });
    // async.each(
    //     files,
    //     function(file, outCb) {
    //         fs.readFile(file, "utf8", (err, data) => {
    //             console.log(file);
    //             outCb();
    //         });
    //     },
    //     function(err) {
    //         console.log("all done!!!");
    //     }
    // );
};

demo();
const Tank = require("../models/demoSchema");
const mongoose = require("mongoose");
var async = require("async");

demo = () => {
    var array = [{ name: "jelly bean" }, { name: "snickers" }];

    Tank.create(array, (err, _data) => {
        console.log("done");
        if (err) {
            console.log(err);
        } else console.log(_data);
    });
    async.each(
        files,
        function(file, outCb) {
            fs.readFile(file, "utf8", (err, data) => {
                console.log(file);
                outCb();
            });
        },
        function(err) {
            console.log("all done!!!");
        }
    );
    // var array = [{ name: "jelly bean" }, { name: "snickers" }];

    // async.eachSeries(
    //     array,
    //     function(task, asyncdone) {
    //         console.log(task);
    //     },
    //     function(err) {
    //         if (err) console.log(err);
    //         else console.log("done");
    //     }
    // );
};

demo();
const axios = require("axios");
const Tank = require("../models/demoSchema");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

demo = () => {
    var array = [{ name: "jelly bean" }, { name: "snickers" }];

    //console.log(Tank)
    Tank.create({ name: "jelly bean" }, function(err, Tank) {
        console.error('xxx');
        if (err) {
            console.log(err);
        } else {
            console.log("Multiple documents inserted to Collection");
        }
    });
};

demo();
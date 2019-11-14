const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var DataSchema = new Schema({
    location: {
        type: String,
        trim: true,
        default: ""
    },
    referer: {
        type: String,
        default: "",
        trim: true
    }
});
DataSchema.index({
    location: "text",
    referer: "text"
}, {
    weights: {
        location: 1,
        referer: 1
    }
});
module.exports = {
    DataSchema
};
// type: {
//     type: String,
//     trim: true
// },
// dataLayer: {
//     dynx_itemid: { type: String, default: "" },
//     dynx_pagetype: { type: String, default: "" },
//     dynx_totalvalue: { type: String, default: "" },
//     default: {}
// },
// uid: {
//     type: String,
//     trim: true,
//     default: "",
//     index: true
// },
// timestamp: {
//     type: Date
// }
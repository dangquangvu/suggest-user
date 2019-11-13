const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var DataSchema = new Schema({
    location: {
        type: String,
        trim: true,
        default: "",
        index: true
    },
    referer: {
        type: String,
        default: "",
        trim: true,
        index: true
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
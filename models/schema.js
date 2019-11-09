const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var DataSchema = new Schema({
    type: {
        type: String,
        trim: true
    },
    location: {
        type: String,
        trim: true,
        default: "",
        index: true
    },
    referer: {
        type: String,
        default: "",
        index: true
    },
    dataLayer: {
        dynx_itemid: { type: String, default: "" },
        dynx_pagetype: { type: String, default: "" },
        dynx_totalvalue: { type: String, default: "" },
        default: {}
    },
    uid: {
        type: String,
        trim: true,
        default: "",
        index: true
    },
    timestamp: {
        type: Date
    }
});
module.exports = {
    DataSchema
};
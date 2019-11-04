const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DataSchema = new Schema({
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
    ip: {
        type: String,
        required: true,
        trim: true,
        index: true
    },
    uid: {
        type: String,
        trim: true,
        default: "",
        index: true
    },
    origin: {
        type: String,
        required: true,
        trim: true
    }
});
module.exports = mongoose.model("Data", DataSchema);
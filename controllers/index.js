var Promise = require("bluebird");
var fs = Promise.promisifyAll(require("fs"));
const stream = require("../stream");
const { Room, DataSchema } = require("../models");
module.exports = {
    promiseGetAllData: async() => {
        let promises = [];
        let arrPathDetail = await stream.getAllPathDetails();
        return arrPathDetail;
    },
    getDataReport: async() => {
        let data = await Room.find({});

        return data;
    }
};
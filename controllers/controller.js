var Promise = require("bluebird");
var fs = Promise.promisifyAll(require("fs"));
const stream = require("../stream");
module.exports = {
    promiseGetAllData: async() => {
        let promises = [];
        let arrPathDetail = await stream.getAllPathDetails();
        return arrPathDetail;
    }
};

// var promises = [];
// promises.push(stream.getPath());
// return Promise.all(promises);
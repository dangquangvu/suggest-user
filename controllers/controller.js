var Promise = require("bluebird");
var fs = Promise.promisifyAll(require("fs"));
const stream = require("../stream");
module.exports = {
    promiseGetAllData: async() => {
        let promises = [];
        let arrPathDetail = await stream.getAllPathDetails();
        // for (let i = 0; i < arrPathDetail.length; i++) {
        //     await promises.push(stream.getPath(arrPathDetail[i]));
        // }
        return arrPathDetail;
    }
};

// var promises = [];
// promises.push(stream.getPath());
// return Promise.all(promises);
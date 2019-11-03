var Promise = require("bluebird");
var fs = Promise.promisifyAll(require("fs"));
const stream = require("./stream");
module.exports = {
    getAllImages: () => {
        var promises = [];
        promises.push(stream.getImage());
        return Promise.all(promises);
    }
};
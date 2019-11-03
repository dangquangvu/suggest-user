var Promise = require("bluebird");
var fs = Promise.promisifyAll(require("fs"));
const path = require("path");
var DataSchema = require("./schema");

exports.getImage = (index = false) => {
    var Path = path.join(__dirname, "./logstack/logstash-2019-09-24/13_0.txt");
    return fs.readFileAsync(Path, { encoding: "utf-8" });
};

exports.listName = async(testFolder, list) => {
    await fs.readdirSync(testFolder).forEach(file => {
        let path = testFolder + "/" + file;
        list.push(path);
    });
    return list;
};
exports.save = account => {
    var action = new DataSchema(account);
    return new Promise((resolve, reject) => {
        action.save((err, result) => {
            if (err) {
                return reject(err);
            }
            return resolve(result);
        });
    });
};
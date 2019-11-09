var Promise = require("bluebird");
var fs = Promise.promisifyAll(require("fs"));
const path = require("path");
var DataSchema = require("./models/schema");

exports.getPath = async pathJoin => {
    var Path = path.join(__dirname, pathJoin);
    return await fs.readFileAsync(Path, { encoding: "utf-8" });
};

exports.listName = async pathFolder => {
    let list = [];
    await fs.readdirSync(pathFolder).forEach(file => {
        let path = pathFolder + "/" + file;
        list.push(path);
    });
    return list;
};
// await stream.sleep(10);
// let result = JSON.parse(item[j]);
// await stream.parseData(result, Schema);
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
exports.parseData = async(data, DataSchema) => {
    let dataLayer = data.dataLayer;
    let location = data.location;
    let referer = data.referer;
    if (dataLayer == undefined) {
        dataLayer = {};
    }
    if (location.length > 500) {
        console.log;
        location = "";
    }
    if (referer.length > 500) {
        referer = "";
    }
    if (data.uid) {
        let dataInfor = new DataSchema();
        dataInfor.type = data.type;
        dataInfor.location = location;
        dataInfor.referer = referer;
        dataInfor.dataLayer = dataLayer;
        dataInfor.ip = data.ip;
        dataInfor.uid = data.uid;
        dataInfor.origin = data.origin;
        dataInfor.timestamp = data.timestamp;
    }
    try {
        let result = await dataInfor.save();
        if (result) {
            console.log("done");
        }
    } catch (error) {
        console.log(error);
        console.log(dataInfor);
    }
};

exports.sleep = ms => {
    return new Promise(resolve => setTimeout(resolve, ms));
};

exports.getAllPathDetails = async() => {
    let pathFolderReal = "./logstack";
    let arrPathDetail = [];
    let data = await this.listName(pathFolderReal);
    for (i = 0; i < data.length; i++) {
        let arrPathDatasDetail = [];
        arrPathDatasDetail = await this.listName(data[i]);
        arrPathDetail = arrPathDetail.concat([arrPathDatasDetail]);
    }
    return arrPathDetail;
};
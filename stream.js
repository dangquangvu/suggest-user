var Promise = require("bluebird");
var fs = Promise.promisifyAll(require("fs"));
const path = require("path");
var DataSchema = require("./schema");
var pathFolder = "./logstack";

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
exports.parseData = async data => {
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
    let dataInfor = new DataSchema();
    dataInfor.location = location;
    dataInfor.referer = referer;
    dataInfor.dataLayer = dataLayer;
    dataInfor.ip = data.ip;
    dataInfor.uid = data.uid;
    dataInfor.origin = data.origin;
    dataInfor.timestamp = data.timestamp;

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
    let arrPathDetail = [];
    let data = await this.listName(pathFolder);
    for (i = 0; i < data.length; i++) {
        let arrPathDatasDetail = await this.listName(data[i]);
        arrPathDetail = [...arrPathDetail, ...arrPathDatasDetail];
    }
    return arrPathDetail;
};
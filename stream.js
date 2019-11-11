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
exports.parseData = data => {
    let dataInfor = {};
    let dataLayer = data.dataLayer;
    let location = data.location;
    let referer = data.referer;
    var res = location.substring(24);
    if (dataLayer == undefined) {
        dataLayer = {};
    }
    if (location.length > 700) {
        location = "";
    }
    if (referer.length > 700) {
        referer = "";
    }

    if (data.uid.length != "Unkown" && data.type == "visit") {
        if (location) {
            n = location.indexOf("?");
            location = location.substring(0, n);
            let l = location.indexOf("/");
            let l1 = location.indexOf("/", parseInt(l + 3));
            location = location.substring(l1 + 1);
        }
        if (referer) {
            n = referer.indexOf("?");
            referer = referer.substring(0, n);
            let l = location.indexOf("/");
            let l1 = location.indexOf("/", parseInt(l + 3));
            location = location.substring(l1 + 1);
        }
        dataInfor.location = location;
        dataInfor.referer = referer;
    }
    return dataInfor;
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
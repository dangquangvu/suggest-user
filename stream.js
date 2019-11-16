var Promise = require("bluebird");
var fs = Promise.promisifyAll(require("fs"));
const path = require("path");
var streamInner = require("./stream");
const mongoose = require("mongoose");
const DataSchema = require("./models/schema");
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
    let fake = { location: "", referer: "" };
    let dataLayer = data.dataLayer;
    let location = data.location;
    let referer = data.referer;
    var res = location.substring(24);

    if (location.length > 700) {
        location = "";
    }
    if (referer.length > 700) {
        referer = "";
    }
    let timsimlocation = location.lastIndexOf("sim/");
    let timsimreferer = referer.lastIndexOf("sim/");
    let orderString = location.lastIndexOf("#/orders");
    let sim_gia_re = location.lastIndexOf("sim-gia-re");
    let sim_tra_gop = location.lastIndexOf("sim-tra-gop");
    let bai_viet = location.lastIndexOf("bai-viet/");
    let xem = location.lastIndexOf("xem-");
    if (
        data.uid.length != "Unkown" &&
        data.type == "visit" &&
        timsimlocation == -1 &&
        orderString == -1 &&
        sim_gia_re == -1 &&
        sim_tra_gop == -1 &&
        bai_viet == -1 &&
        timsimreferer == -1 &&
        xem == -1
    ) {
        if (location) {
            let html = location.lastIndexOf(".html");
            let l = location.indexOf("/");
            let l1 = location.indexOf("/", parseInt(l + 3));
            location = location.substring(l1 + 1);
            let _p = location.lastIndexOf("-p");
            let n = location.indexOf("?");
            if (n != -1) {
                location = location.substring(0, n);
            }
            if (html != -1) {
                location = location.substring(0, html);
            }
            if (_p > 12) {
                location = location.substring(0, _p);
            }
        }
        if (referer) {
            let html = referer.lastIndexOf(".html");
            let l = referer.indexOf("/");
            let l1 = referer.indexOf("/", parseInt(l + 3));
            referer = referer.substring(l1 + 1);
            let _p = referer.lastIndexOf("-p");
            let n = referer.indexOf("?");
            if (n != -1) {
                referer = referer.substring(0, n);
            }
            if (html != -1) {
                referer = referer.substring(0, html);
            }
            if (_p > 12) {
                referer = referer.substring(0, _p);
            }
        }
        dataInfor.location = location;
        dataInfor.referer = referer;
        return dataInfor;
    }
    return (dataInfor = false);
};

exports.sleep = ms => {
    return new Promise(resolve => setTimeout(resolve, ms));
};
exports.handlerName = name => {
    //logstash - 2019 - 09 - 24
    var regex = /[^a-z0-9]/g;
    return name.replace(regex, "");
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
exports.handlerLocation = async(list, location) => {
    let counter = 0;
    for (let i = 0; i < list.length; i++) {
        const Schema = mongoose.model(list[i], DataSchema.DataSchema);
        let count = await Schema.find({
            location: { $regex: location, $options: "i" }
        }).countDocuments();
        counter += count;
    }
    return counter;
};
exports.handlerReferer = async(list, location, referer) => {
    let counter = 0;
    for (let i = 0; i < list.length; i++) {
        const Schema = mongoose.model(list[i], DataSchema.DataSchema);
        let count = await Schema.find({
            location: { $regex: location, $options: "i" },
            referer: { $regex: referer, $options: "i" }
        }).countDocuments();
        counter += count;
    }
    return counter;
};
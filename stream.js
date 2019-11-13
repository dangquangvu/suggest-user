var Promise = require("bluebird");
var fs = Promise.promisifyAll(require("fs"));
const path = require("path");
var DataSchema = require("./models/schema");
var streamInner = require("./stream");
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
    if (dataLayer == undefined) {
        dataLayer = {};
    }
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
    if (
        data.uid.length != "Unkown" &&
        data.type == "visit" &&
        timsimlocation == -1 &&
        orderString == -1 &&
        sim_gia_re == -1 &&
        sim_tra_gop == -1 &&
        bai_viet == -1 &&
        timsimreferer == -1
    ) {
        if (location) {
            let _p = location.lastIndexOf("-p");
            if (
                location.lastIndexOf("sim-loc-phat") != -1 ||
                location.lastIndexOf("sim-phong-thuy")
            ) {}
            let html = location.lastIndexOf(".html");
            let n = location.indexOf("?");
            if (n != -1) {
                location = location.substring(0, n);
            }
            if (_p != -1) {
                location = location.substring(0, _p);
            }
            if (html != -1) {
                location = location.substring(0, html);
            }
            let l = location.indexOf("/");
            let l1 = location.indexOf("/", parseInt(l + 3));
            location = location.substring(l1 + 1);
        }
        if (referer) {
            let _p = referer.lastIndexOf("-p");
            let html = referer.lastIndexOf(".html");
            let n = referer.indexOf("?");
            if (n != -1) {
                referer = referer.substring(0, n);
            }
            if (_p != -1) {
                referer = referer.substring(0, _p);
            }
            if (html != -1) {
                referer = referer.substring(0, html);
            }
            let l = referer.indexOf("/");
            let l1 = referer.indexOf("/", parseInt(l + 3));
            referer = referer.substring(l1 + 1);
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
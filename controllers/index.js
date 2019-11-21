var Promise = require("bluebird");
var fs = Promise.promisifyAll(require("fs"));
const stream = require("../stream");
const { Room, DataSchema } = require("../models");
Array.prototype.remove = function() {
    var what,
        a = arguments,
        L = a.length,
        ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};
module.exports = {
    promiseGetAllData: async() => {
        let promises = [];
        let arrPathDetail = await stream.getAllPathDetails();
        return arrPathDetail;
    },
    getDataReport: async() => {
        let data = await Room.find({});
        data.map(item => {
            let arrNext = item.arrNext;
            arrNext.sort(function(a, b) {
                return b.count - a.count;
            });
            // var a = arrNext.indexOf(Element => Element.pathFull == item.pathFull);
            //arrNext.filter(Element => Element.pathFull == item.pathFull);
            arrNext.map((i, index) => {
                if (i.pathFull == item.pathFull) {
                    //console.log(i.pathFull, item.pathFull, index);
                    arrNext.splice(index, 1);
                }
            });
            arrNext.splice(10, arrNext.length);
            console.log(item);
        });

        return data;
    }
};
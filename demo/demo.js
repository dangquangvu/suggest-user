//require extensions
var Promise = require("bluebird");
//require file
let queryService = require("../services");
let ValueQuery = require("../const").ValueQuery;
//require handler file
let stream = require("../stream");
//require mongoose schema
const mongoose = require("mongoose");
Promise.promisifyAll(require("mongoose"));
let { mongooseConnect, Room, DataSchema } = require("../models");
var MongoClient = require("mongodb");
var fs = Promise.promisifyAll(require("fs"));
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
let funcProcess = async() => {
    console.time("timer");
    let listCollectionsName = [];
    await mongooseConnect.then(async() => {
        await mongoose.connection.db
            .listCollections()
            .toArray()
            .then(data => {
                data.map(item => {
                    listCollectionsName.push(item.name);
                });
                listCollectionsName.remove("rooms");
            })
            .catch(err => console.log(err));
    });

    console.log(listCollectionsName);
    let handlerLocation = ValueQuery.map(async item => {
        let data = await stream.handlerLocation(
            listCollectionsName,
            item.pathCompact
        );
        return data;
    });
    await Promise.all(handlerLocation)
        .then(async result => {
            let i = 0;
            ValueQuery.map(item => {
                item.count = result[i];
                i++;
            });
        })
        .catch(err => console.log(err));
    let process = async ValueQuery => {
        console.log("start process");
        for (let i = 0; i < ValueQuery.length; i++) {
            let arrNext = ValueQuery[i].arrNext;
            let handler = arrNext.map(async item => {
                let data = await stream.handlerReferer(
                    listCollectionsName,
                    ValueQuery[i].pathCompact,
                    item.pathCompact
                );
                return data;
            });
            await Promise.all(handler)
                .then(result => {
                    let i = 0;
                    arrNext.map(item => {
                        item.count = result[i];
                        i++;
                        console.log(item);
                    });
                })
                .catch(err => console.log(err));
        }
        console.log("endof");
    };
    await process(ValueQuery)
        .then(async result => {
            await Promise.all(
                    ValueQuery.map(async item => {
                        await queryService.findAndUpdate(item);
                    })
                )
                .then(data => {
                    console.log("OK");
                })
                .catch(err => console.log(err));
            console.log("done");
            console.log("done");
            console.timeEnd("timer");
        })
        .catch(err => console.log(err));

    await console.log("end");
};
funcProcess();
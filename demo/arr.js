const fs = require("fs");
list = [];

listDir = [];

async function getNameforFile() {
    let listfileName = [];
    const testFolder = "../logstack";
    let data = stream.listName(testFolder, list);
    await data.then(item => {
        item.map(async element => {
            await stream.listName(element, listfileName);
        });
    });
    console.log(listfileName);
}
//getNameforFile();

demo = () => {
    referers = [
        "https://simthanglong.vn/73/sim-loc-phat-p4.html.html",
        "https://simthanglong.vn/sim-gia-re-p3.html",
        "https://simthanglong.vn/82/sim-vip-p3.html",
        "https://simthanglong.vn/71/sim-doi-p5.html",
        "https://simthanglong.vn/sim-phong-thuy-p6.html",
        "https://simthanglong.vn/sim-de-nho-mobifone-p5",
        "https://simthanglong.vn/106/sim-dau-so-co.html?utm_source=Google&utm_medium=Remarketing&utm_campaign=Remarketing-So-co&utm_content=Remarketing-text&gclid=EAIaIQobChMI8LO-qOzo5AIVAorCCh23XAi0EAEYASAAEgJrS_D_BwE"
    ];
    referers.map(referer => {
        if (referer.length > 700) {
            referer = "";
        }
        let timsimreferer = referer.lastIndexOf("sim/");
        let orderString = referer.lastIndexOf("#/orders");
        let sim_tra_gop = referer.lastIndexOf("sim-tra-gop");
        let bai_viet = referer.lastIndexOf("bai-viet/");
        let xem = referer.lastIndexOf("xem-");
        if (
            timsimreferer == -1 &&
            orderString == -1 &&
            sim_tra_gop == -1 &&
            bai_viet == -1 &&
            xem == -1
        ) {
            if (referer) {
                if (referer.indexOf("topsim.vn/sim-gia-re") != -1) {
                    referer = "";
                }
                let l = referer.indexOf("/");
                let l1 = referer.indexOf("/", parseInt(l + 3));
                referer = referer.substring(l1 + 1);

                let n = referer.indexOf("?");
                if (n != -1) {
                    referer = referer.substring(0, n);
                }
                let html = referer.indexOf(".html");
                if (html != -1) {
                    referer = referer.substring(0, html);
                }
                let _p = referer.lastIndexOf("-p");

                if (
                    referer.indexOf("sim-doi") != -1 ||
                    referer.indexOf("82/sim-vip") != -1 ||
                    referer.indexOf("sim-gia-re") != -1
                ) {
                    if (_p > 9) {
                        referer = referer.substring(0, _p);
                    }
                }
                if (
                    referer.indexOf("sim-doi") == -1 ||
                    referer.indexOf("82/sim-vip") == -1 ||
                    referer.indexOf("sim-gia-re") == -1
                ) {
                    if (_p > 11) {
                        referer = referer.substring(0, _p);
                    }
                }

                console.log(referer);
            }
        }
    });
};
demo();

// let list = listCollectionsName.listCollectionsName;
// let counter = 0;
// // let location = "sim-theo-gia/tu-500-nghin-den-1-trieu";
// // let referer = "sim-tra-sau";
// //let data = await stream.handlerReferer(list, location, referer);
// let handler = ValueQuery.map(async location => {
//     let data2 = await stream.handlerLocation(list, location.pathCompact);
//     return location.pathCompact + "----" + data2;
// });
// Promise.all(handler)
//     .then(result => {
//         console.log(result);
//     })
//     .catch(err => console.log(err));

// let data = await controller.promiseGetAllData();
//     if (data) {
//         let handler = async() => {
//             for (let i = 0; i < data.length; i++) {
//                 let promises = [];
//                 let arrData = [];
//                 let name = data[i][i].substring(11, 30);
//                 let handlerName = stream.handlerName(name);
//                 let firstItem = data[i];
//                 const Schema = mongoose.model(name, DataSchema.DataSchema);
//                 for (let x = 0; x < firstItem.length; x += 100) {
//                     let dataX = firstItem.slice(x, x + 100);
//                     dataX.map(item => {
//                         promises.push(stream.getPath(item));
//                     });
//                     await Promise.all(promises)
//                         .then(async results => {
//                             for (let i = 0; i < results.length; i++) {
//                                 let item = results[i].toString().split("\n");
//                                 for (let j = 0; j < item.length - 1; j++) {
//                                     let result = JSON.parse(item[j]);
//                                     let dataFilter = stream.parseData(result);
//                                     if (dataFilter.hasOwnProperty("location") == true) {
//                                         if (dataFilter.location != "" && dataFilter.referer != "") {
//                                             arrData.push(dataFilter);
//                                         }
//                                     }
//                                 }
//                                 let Data = mongoose.model(handlerName, DataSchema.DataSchema);
//                                 Data.insertMany(arrData, (err, _data) => {
//                                     if (err) {
//                                         console.log(err);
//                                     } else console.log("x");
//                                 });
//                                 arrData = [];
//                             }
//                         })
//                         .catch(err => console.log(err));
//                     promises = [];
//                 }
//             }
//         };
//         await handler(data);
//         console.log("end");
//     }
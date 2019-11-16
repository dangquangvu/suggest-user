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
    referer = "https://simthanglong.vn/sim-nam-sinh-1982-p2";
    if (referer.length > 700) {
        referer = "";
    }
    let timsimreferer = referer.lastIndexOf("sim/");
    let orderString = referer.lastIndexOf("#/orders");
    let sim_gia_re = referer.lastIndexOf("sim-gia-re");
    let sim_tra_gop = referer.lastIndexOf("sim-tra-gop");
    let bai_viet = referer.lastIndexOf("bai-viet/");
    let xem = referer.lastIndexOf("xem-");
    if (
        timsimreferer == -1 &&
        orderString == -1 &&
        sim_gia_re == -1 &&
        sim_tra_gop == -1 &&
        bai_viet == -1 &&
        xem == -1
    ) {
        if (referer) {
            console.log("vvv");
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
                console.log(referer);
            }
            console.log(referer);
        }
    }
};
demo();
// if (data) {
//     for (let i = 0; i < data.length; i++) {
//         let promises = [];
//         let arrData = [];
//         let name = data[i][i].substring(11, 30);
//         let firstItem = data[i];
//         const Schema = mongoose.model(name, DataSchema.DataSchema);
//         for (let x = 0; x < firstItem.length; x += 100) {
//             let dataX = firstItem.slice(x, x + 100);
//             await dataX.map(async item => {
//                 await promises.push(stream.getPath(item));
//             });
//             await Promise.all(promises)
//                 .then(async results => {
//                     for (let i = 0; i < results.length; i++) {
//                         let item = results[i].toString().split("\n");
//                         for (let j = 0; j < item.length - 1; j = j + 1) {
//                             let result = JSON.parse(item[j]);
//                             let dataFilter = stream.parseData(result);
//                             arrData.push(dataFilter);
//                         }
//                         arrData = [];
//                     }
//                 })
//                 .catch(err => console.log(err));
//             await stream.sleep(10);
//             promises = [];
//         }
//     }
//     console.log("end");
// }
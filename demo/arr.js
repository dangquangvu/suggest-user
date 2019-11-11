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
    arr = [1, 2, 3, 4, 5, 6, 7, 8];
    arr.splice(-1);
    console.log(arr);
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
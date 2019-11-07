const fs = require("fs");
//const stream = require("../controllers/stream");
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
    arr = [];
    arr1 = [1, 1, 1];
    arr2 = [2, 2, 2];
    arr = [
        [...arr1],
        [...arr2]
    ];
    console.log(arr);
};
demo();
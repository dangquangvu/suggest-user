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
    arr = [1, 2, 3, 4, 5, 6, 7, 8];
    arr.splice(-1, 1);
    console.log(arr);
};
demo();
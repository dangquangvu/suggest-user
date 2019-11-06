const axios = require("axios");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

demo = () => {
    arr1 = [];
    arr2 = [1, 2, 3, 4];
    arr3 = [5, 6, 7, 8];
    arr1 = [...arr1, ...arr2];
    console.log(arr1);
    arr1 = [...arr1, ...arr3];
    console.log(arr1);
};

//demo();
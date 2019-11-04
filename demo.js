const axios = require("axios");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

var getData = async() => {
    for (i = 0; i < 10; i++) {
        console.log("i:");
        await sleep(2000);
        console.log(i);
    }
};

getData();
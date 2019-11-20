const mongoose = require("mongoose");

let mongooseConnect = mongoose.connect(
    "mongodb://localhost:27017/data_suggest", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        autoIndex: false,
        useFindAndModify: true
    }
);
module.exports = {
    mongooseConnect,
    Room: require("./room"),
    DataSchema: require("./schema").DataSchema
};
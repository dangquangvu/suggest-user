let stream = require("../stream");
exports.findLocationRegex = async(Schema, where) => {
    let data = await stream.findAll(Schema, where);
    return data;
};
exports.findAll = async Schema => {
    let data = await stream.findAll(Schema);
    return data;
};
exports.findBothData = async(Schema, location, referer) => {
    let data = await stream.findBothData(Schema, location, referer);
    return data;
};
exports.findAndUpdate = async newDoc => {
    let data = await stream.updateDocument(newDoc);
    return data;
};
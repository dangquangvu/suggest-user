const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TankSchema = new Schema({
    name: {
        type: String,
        default: ""
    }
});
//exports.Tank = TankSchema;
let Tank = mongoose.model("Tank", TankSchema);
module.exports = {
    TankSchema
};
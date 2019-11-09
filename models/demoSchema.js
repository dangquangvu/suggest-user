const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TankSchema = new Schema({
    name: {
        type: String,
        default: ""
    }
});
//exports.Tank = TankSchema;
module.exports = TankSchema;
//console.time("timer");

// let name = 'tankers'
//         mongoose.model("Tank", TankSchema,name).insertMany(array, (err, _data) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 console.timeEnd('timer')
//                 console.log(_data);}
//         });
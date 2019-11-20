const express = require("express");
const router = express.Router();
const controller = require("../controllers");
var Promise = require("bluebird");
router.get("/", async(req, res) => {
    let data = await controller.getDataReport();
    res.send(data);
});
module.exports = router;
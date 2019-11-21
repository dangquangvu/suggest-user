const express = require("express");
const router = express.Router();
const controller = require("../controllers");
var Promise = require("bluebird");
router.get("/", async(req, res) => {
    res.render("index.ejs");
});
module.exports = router;
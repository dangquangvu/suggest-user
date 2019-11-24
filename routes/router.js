const express = require("express");
const router = express.Router();
const controller = require("../controllers");
var Promise = require("bluebird");
router.get("/", async(req, res) => {
    let data = {
        web: {
            client_id: "926643217067-52ed20ggo3sl7g067ok4j3vbhk8diiod.apps.googleusercontent.com",
            project_id: "algebraic-rider-259707",
            auth_uri: "https://accounts.google.com/o/oauth2/auth",
            token_uri: "https://oauth2.googleapis.com/token",
            auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
            client_secret: "oQPBqEtpZA0l04UycKOtueno",
            redirect_uris: ["http://localhost:3232"],
            javascript_origins: ["http://localhost:3232"]
        }
    };
    res.render("index.ejs");
});
module.exports = router;
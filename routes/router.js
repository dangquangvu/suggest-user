const express = require("express");
const router = express.Router();
const controller = require("../controllers");
var Promise = require("bluebird");
router.get("/", async(req, res) => {
    //let data = await controller.getDataReport();
    let data = {
        installed: {
            client_id: "926643217067-53jo8lonl42ubqpr1oheqgd9u0ren3cn.apps.googleusercontent.com",
            project_id: "algebraic-rider-259707",
            auth_uri: "https://accounts.google.com/o/oauth2/auth",
            token_uri: "https://oauth2.googleapis.com/token",
            auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
            client_secret: "M7qmjLV1EjgqKIxbjoJAqdL8",
            redirect_uris: ["urn:ietf:wg:oauth:2.0:oob", "http://localhost"]
        }
    };
    res.send(data);
});
module.exports = router;
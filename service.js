const express = require("express");
const app = express();
const port = 3232;

app.get("/", (req, res) => {
    data = {
        id: 123,
        data: "name"
    };
    res.json({ data: data });
});

app.listen(port, () => {
    console.log("server is listening on port: " + port);
});
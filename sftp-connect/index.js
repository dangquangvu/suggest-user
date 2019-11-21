let Client = require("ssh2-sftp-client");
let sftp = new Client();

sftp
    .connect({
        host: "157.230.248.230",
        port: "22",
        username: "root",
        password: "7y6c4a0k"
    })
    .then(data => {
        console.log(data, 111);
        sftp.list("/mnt/volume_sgp1_01/logs/").then(data => {
            data.map();
        });
        //return sftp.list('/pathname');
    })
    .catch(err => {
        console.log(err, "catch error");
    });
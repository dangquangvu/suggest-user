const { google } = require("googleapis");
const key = require("./private_key.json");
const path = require("path");
const fs = require("fs");

const drive = google.drive("v3");

var jwToken = new google.auth.JWT(
    key.client_email,
    null,
    key.private_key, ["https://www.googleapis.com/auth/drive"],
    null
);

jwToken
    .authorize()
    .then(authSuccess => {
        console.log(authSuccess);
        console.log("Authorization accorded");
    })
    .catch(authErr => {
        console.log("error : " + authErr);
        return;
    });

var folderId = "1ulkQhxkJnp47cv9Ee9m5CXpssFAj0X0V";
// var fileMetadata = {
//     name: "xxxxyyyy",
//     mimeType: "application/vnd.google-apps.folder",
//     parents: [folderId]
// };
// drive.files.create({
//         auth: jwToken,
//         resource: fileMetadata,
//         fields: "id"
//     },
//     function(err, file) {
//         if (err) {
//             // Handle error
//             console.error(err);
//         } else {
//             console.log("Folder Id: ", file.data.id);
//         }
//     }
// );

// var fileMetadata = {
//     name: "name",
//     parents: [folderId]
// };
// var media = {
//     mimeType: "application/json",
//     body: fs.createReadStream(path.join(__dirname, "./private_key.json"))
// };
// drive.files
//     .create({
//         auth: jwToken,
//         resource: fileMetadata,
//         media: media,
//         fields: "id,name"
//     })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => console.log(err));

// var parents = "1-fs8uASHdyXi8NidshVp2DFxkSGOFTFl";
// const team_options = { supportsTeamDrives: true, includeTeamDriveItems: true };
// drive.files
//     .list({
//             auth: jwToken,
//             pageSize: 10,
//             q: "'" + parents + "' in parents and trashed=false",
//             fields: "files(id, name)"
//         },
//         team_options
//     )
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => console.log("The API returned an error: " + err));
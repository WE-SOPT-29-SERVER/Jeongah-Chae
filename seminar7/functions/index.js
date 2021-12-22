const admin = require("firebase-admin");
const serviceAccount = require("./we-sopt-29-46fb9-firebase-adminsdk-fv7jk-a9a083b5bd.json");
const dotenv = require("dotenv");

dotenv.config();

let firebase;
if (admin.apps.length === 0) {
    firebase = admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
    });
} else {
    firebase = admin.app();
}

module.exports = {
    api: require("./api"),
};

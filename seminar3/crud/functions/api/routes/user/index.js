const express = require("express");
const router = express.Router();

router.post("/signup", require("./userSignupPOST"));
router.post("/login", require("./userLoginPOST"));
router.put("/:id", require('./userUpdatePUT'));
router.delete("/:id", require("./userRemoveDELETE"));

module.exports = router;
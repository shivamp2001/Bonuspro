const express = require("express");
const { createForm, getallform } = require("../controller/formController");
const router = express.Router();

router.post("/createform", createForm);
router.get("/getallform", getallform);
module.exports = router;

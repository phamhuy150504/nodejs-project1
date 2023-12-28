const express = require("express");
const { index } = require("../../controllers/client/home.controller");

const router = express.Router();

router.get("/", index);

module.exports = router;

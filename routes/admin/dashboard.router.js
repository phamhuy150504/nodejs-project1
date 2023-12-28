const express = require("express");
const { dashboard } = require("../../controllers/admin/dashboard.controller");

const router = express.Router();

router.get("/", dashboard);

module.exports = router;
    
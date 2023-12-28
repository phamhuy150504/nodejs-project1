const express = require("express");
const { product } = require("../../controllers/client/product.controller");
const router = express.Router();

router.get("/", product);

module.exports = router;
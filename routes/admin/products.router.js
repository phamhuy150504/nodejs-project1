const express = require("express");
const { products }  = require("../../controllers/admin/products.controller");

const router = express.Router();

router.get("/", products);

module.exports = router;

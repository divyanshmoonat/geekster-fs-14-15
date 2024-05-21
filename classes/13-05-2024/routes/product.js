const express = require("express");

const productController = require("../controllers/product");

const router = express.Router();

router.get("/list", productController.getProductList);

router.get("/details", productController.getProductDetails);

module.exports = router;

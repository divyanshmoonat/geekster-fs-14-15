const express = require("express");

const cartController = require("../controllers/cart");

const router = express.Router();

router.get("/add-to-cart", cartController.addToCart);

router.get("/add-to-wishlist", cartController.addToWishlist);

module.exports = router;

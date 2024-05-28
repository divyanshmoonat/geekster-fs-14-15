const express = require("express");

const postController = require("../controllers/post");
const roleMiddleware = require("../middlewares/roleMiddleware");

const router = express.Router();

router.get("/", roleMiddleware("ADMIN"), postController.listPosts);

router.post("/", roleMiddleware("CONTENT_CREATOR"), postController.createPost);

module.exports = router;

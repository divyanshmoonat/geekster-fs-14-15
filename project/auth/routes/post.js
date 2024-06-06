const express = require("express");

const postController = require("../controllers/post");
const roleMiddleware = require("../middlewares/roleMiddleware");

const router = express.Router();

router.post("/", postController.createPost); // Create a new post.

router.get("/", postController.listPosts); //Retrieve all posts.

router.get("/:id", postController.getPostById); // Retrieve a specific post by ID.

router.put("/:id", postController.editPost); // Update an existing post.

router.delete("/:id", postController.deletePost); // Delete a post by ID.

router.post("/place-order", postController.placeOrder);

// Commenting routes

router.post("/comments/:postId", postController.postComment);

module.exports = router;

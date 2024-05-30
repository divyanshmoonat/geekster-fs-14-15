const PostsModel = require("../models/post");
const UsersModel = require("../models/auth");

const listPosts = async (req, res) => {
  const postsList = await PostsModel.find({}).populate("userId");
  res.json({
    results: postsList,
  });
};

const createPost = async (req, res) => {
  console.log(req.user._id);
  const newPost = new PostsModel({ ...req.body, userId: req.user._id });
  await newPost.save();
  res.json({
    msg: "Post created successfully",
  });
};

const getPostById = async (req, res) => {
  const postId = req.params.id;
  const post = await PostsModel.findById(postId).populate("userId");

  // const userId = post.userId;
  // const user = await UsersModel.findById(userId);
  // post.userId = user;
  res.json({ result: post });
};

const editPost = async (req, res) => {
  const postId = req.params.id;
  // ToDo : Write a find query to get the post
  // Match the post's userId with req.user._id
  await PostsModel.findByIdAndUpdate(postId, req.body);
  res.json({ msg: "Post edited successfully" });
};

const deletePost = async (req, res) => {
  const postId = req.params.id;
  await PostsModel.findByIdAndDelete(postId);
  res.json({ msg: "Post deleted successfully" });
};

const postController = {
  listPosts,
  createPost,
  getPostById,
  editPost,
  deletePost,
};

module.exports = postController;

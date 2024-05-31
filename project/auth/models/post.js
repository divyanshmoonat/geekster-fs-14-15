const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: false,
      deafult: "Lorem ipsum",
    },
    tags: {
      type: Array,
      required: true,
    },
    userId: {
      type: mongoose.Types.ObjectId, // _id data type
      ref: "users", // Connecting collection (posts <-> users)
    },
    views: {
      type: Number,
    },
    comments: [
      {
        _id: false,
        comment: {
          type: String,
        },
        date: {
          type: Date,
          default: new Date(),
        },
        userId: {
          type: mongoose.Schema.Types.ObjectId,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const PostsModel = mongoose.model("posts", postSchema);

module.exports = PostsModel;

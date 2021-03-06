const mongoose = require("mongoose");
const Category = require("./Category");

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
    },
    photo: {
      img: { type: String },
      id: { type: String },
    },
    author: {
      type: String,
      required: true,
    },
    categories: {
      type: Array,
      required: false,
      unique: true,
    },
    tags: {
      type: Array,
      required: false,
      unique: true,
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("post", PostSchema);
module.exports = Post;

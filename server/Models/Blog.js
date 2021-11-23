const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
  title: {},
  name: {},
  about: {},
  photo: {},
  socialLinks: {},
});

const Blog = mongoose.model("blog", BlogSchema);

module.exports = Blog;

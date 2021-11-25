const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  subTitle: { type: String },
  name: { type: String },
  photo: {
    img: { type: String },
    id: { type: String },
  },
  about: { type: String },
  socialLinks: {
    instagram: { type: String },
    facebook: { type: String },
    twitter: { type: String },
  },
});

const Blog = mongoose.model("blog", BlogSchema);

module.exports = Blog;

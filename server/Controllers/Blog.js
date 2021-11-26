const Blog = require("../Models/Blog");

module.exports.editBlog_put = async (req, res) => {
  console.log(req.body);
  const { instagram, facebook, twitter, about, id } = req.body;
  try {
    const newBlog = await Blog.findOneAndUpdate(
      id,
      {
        $set: { about },
      },
      { new: true }
    );
    console.log("new", newBlog);
    res.status(200).json(newBlog);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports.getBlog_get = async (req, res) => {
  try {
    const blog = await Blog.findOne({});
    res.status(200).json(blog);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

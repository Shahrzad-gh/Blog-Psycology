const Blog = require("../Models/Blog");

module.exports.editBlog_put = async (req, res) => {
  const { about, id, instagram, facebook, twitter } = req.body.site;

  try {
    const newBlog = await Blog.findByIdAndUpdate(
      id,
      {
        $set: { about, socialLinks: { instagram, facebook, twitter } },
      },
      { new: true }
    );
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

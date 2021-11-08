const Post = require("../Models/Post");

module.exports.addPost_post = async (req, res) => {
  const newPost = new Post(req.body);

  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
};
module.exports.removePost_delete = async (req, res) => {
  // const postId = req.params.id;
  // try {
  //   await Post.deleteOne({ _id: postId });
  // } catch (error) {
  //   res.status(500).json(error);
  // }
};
module.exports.editPost_put = async (req, res) => {
  const postId = req.params.id;
  try {
    const post = await Post.findById(postId);
    console.log(post);
    console.log(res.locals.user);

    if (post.author === res.locals.user.username) {
      try {
        const newPost = await Post.findByIdAndUpdate(
          postId,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(201).json(newPost);
      } catch (error) {
        res.status(500).json(error);
      }
    } else {
      res.status(401).json("you should update your posts");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports.getAllPosts_get = (req, res) => {};
module.exports.getPostById_get = (req, res) => {};

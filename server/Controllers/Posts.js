const Post = require("../Models/Post");
const cloudinary = require("../utils/cloudinary");
const handleError = (error) => {
  let err = { message: "" };

  if (error.code === 400) {
    err.message = "File size too large";
  }
};

module.exports.addPost_post = async (req, res) => {
  let photo = { img: "", id: "" };
  const { title, author, desc, categories } = req.body;
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUDNAME,
    api_key: process.env.CLOUDINARY_APIKEY,
    api_secret: process.env.CLOUDINARY_APISECRET,
  });
  try {
    if (req.file !== undefined) {
      const result = await cloudinary.uploader.upload(req.file.path);
      photo.img = result.secure_url;
      photo.id = result.public_id;
    } else {
      photo = {
        img: "https://res.cloudinary.com/dw8wf8gps/image/upload/v1637507302/default-text-effect_67638-192_sgvqyk.jpg",
        id: "",
      };
    }
    const newPost = await Post.create({
      title,
      author,
      desc,
      categories,
      photo,
    });
    res.status(200).json(newPost);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports.removePost_delete = async (req, res) => {
  const postId = req.params.id;

  try {
    const post = await Post.findById(postId);
    if (post.author.toLowerCase() === res.locals.user.username.toLowerCase()) {
      try {
        await post.delete();
        res.status(201).json("post has been deleted!");
      } catch (error) {
        res.status(500).json(error);
      }
    } else {
      res.status(401).json("you should delete your posts");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
module.exports.editPost_put = async (req, res) => {
  const postId = req.params.id;
  let photo = { img: "", id: "" };
  const { title, author, desc, categories } = req.body;
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUDNAME,
    api_key: process.env.CLOUDINARY_APIKEY,
    api_secret: process.env.CLOUDINARY_APISECRET,
  });
  try {
    const post = await Post.findById(postId);

    if (post.author.toLowerCase() === res.locals.user.username.toLowerCase()) {
      try {
        if (req.file !== undefined) {
          const result = await cloudinary.uploader.upload(req.file.path);
          photo.img = result.secure_url;
          photo.id = result.public_id;
        } else {
          photo = { img: post.photo.img, id: post.photo.id };
        }
        const newPost = await Post.findByIdAndUpdate(
          postId,
          {
            $set: { title, author, desc, categories, photo },
          },
          { new: true }
        );
        res.status(201).json(newPost);
      } catch (error) {
        const err = handleError(error);
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("you should update your posts");
    }
  } catch (error) {
    console.log("2", error);
    res.status(500).json(error);
  }
};

module.exports.getAllPosts_get = async (req, res) => {
  const author = req.query.user;
  const cat = req.query.cat;
  try {
    let posts;
    if (author) {
      //search case insensitive
      posts = await Post.find({
        author: { $regex: `${author}`, $options: "i" },
      });
    } else if (cat) {
      posts = await Post.find({
        categories: {
          $in: [cat],
        },
      });
    } else {
      posts = await Post.find();
    }
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports.getPostById_get = async (req, res) => {
  const postId = req.params.id;

  try {
    const post = await Post.findById(postId);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
};

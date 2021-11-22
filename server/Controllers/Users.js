const User = require("../Models/User");
const Post = require("../Models/Post");
const cloudinary = require("../utils/cloudinary");

module.exports.removeUser_delete = async (req, res) => {
  const userId = res.locals.user._id;
  try {
    const user = await User.find(userId);
    try {
      await Post.deleteMany({ username: user.username });
      await User.findByIdAndDelete(userId);
      res.status(200).json("User has been deleted!");
    } catch (error) {
      res.status(500).json(error);
    }
  } catch (error) {
    res.status(404).json("user not found");
  }
};

module.exports.editUser_put = async (req, res) => {
  const name = req.params.username;
  let photo = { img: "", id: "" };
  const { username, email } = req.body;
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUDNAME,
    api_key: process.env.CLOUDINARY_APIKEY,
    api_secret: process.env.CLOUDINARY_APISECRET,
  });
  try {
    const user = await User.findOne({ username: name });
    if (
      user.username.toLowerCase() === res.locals.user.username.toLowerCase()
    ) {
      try {
        if (req.file !== undefined) {
          const result = await cloudinary.uploader.upload(req.file.path);
          photo.img = result.secure_url;
          photo.id = result.public_id;
        } else {
          photo = { img: user.photo.img, id: user.photo.id };
        }
        const updatedUser = await User.findByIdAndUpdate(
          user._id,
          {
            $set: { username, email, photo },
          },
          { new: true }
        );
        res.status(200).json(updatedUser);
      } catch (error) {
        console.log(error);
        res.status(500).json(error);
      }
    } else {
      res.status(401).json("you should update your account");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports.getUserById_get = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...rest } = user._doc;
    res.status(200).json(rest);
  } catch (error) {
    res.status(500).json(error);
  }
};

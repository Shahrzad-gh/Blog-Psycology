const User = require("../Models/User");
const Post = require("../Models/Post");

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
  const userId = res.locals.user._id;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        $set: req.body,
      },
      { new: true }
    );
    console.log("update", updatedUser);
    res.status(200).json(updatedUser);
  } catch (error) {
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

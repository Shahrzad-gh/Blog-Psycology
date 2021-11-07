const User = require("../Models/User");
const jwt = require("jsonwebtoken");

// create json web token
const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: maxAge,
  });
};

module.exports.login_post = async (req, res) => {
  try {
    const user = await User.login(req.body.email, req.body.password);
    const token = createToken(user._id);
    res.cookie("token", token, { httpOnly: false });
    let { password, ...rest } = user._doc;
    res.status(200).json({ rest });
  } catch (errors) {
    console.log(errors);
    res.status(400).json({ errors });
  }
};

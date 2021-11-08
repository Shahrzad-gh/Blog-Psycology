const User = require("../Models/User");
const jwt = require("jsonwebtoken");

// handle errors
const handleErrors = (err) => {
  let errors = { email: "", password: "" };

  // incorrect email
  if (err.message === "incorrect email") {
    errors.email = "That email is not registered";
  }

  // incorrect password
  if (err.message === "incorrect password") {
    errors.password = "That password is incorrect";
  }

  // duplicate email error
  if (err.code === 11000) {
    errors.email = "that email is already registered";
    return errors;
  }

  // validation errors
  if (err.message.includes("user validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }

  return errors;
};

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
    res.status(200).json({ rest, token });
  } catch (error) {
    const errors = handleErrors(error);
    res.status(400).json({ errors });
  }
};

module.exports.register_post = async (req, res) => {
  const { firstName, lastName, username, email, password } = req.body;
  try {
    const user = await User.create({
      firstName,
      lastName,
      username,
      email,
      password,
    });
    const token = createToken(user._id);
    res.cookie("token", token, { httpOnly: false, maxAge: maxAge * 1000 });
    res.status(201).json({ user });
  } catch (error) {
    const errors = handleErrors(error);
    res.status(400).json({ errors });
  }
};

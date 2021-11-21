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
    let { password, ...rest } = user._doc;
    res
      .cookie("token", token, { httpOnly: true, maxAge: maxAge * 1000 })
      .status(200)
      .json(rest);
  } catch (error) {
    const errors = handleErrors(error);
    res.status(401).json({ errors });
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
    res.cookie("token", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(201).json({ user });
  } catch (error) {
    const errors = handleErrors(error);
    res.status(400).json({ errors });
  }
};

module.exports.logout_get = async (req, res) => {
  try {
    res.cookie("token", "", { httpOnly: true, maxAge: 1 });
    res.status(200).json("OK");
  } catch (error) {
    console.log(error);
  }
};

module.exports.loggedIn_get = (req, res) => {
  try {
    const token = req.headers.cookie.split("=")[1];
    if (!token) return res.json(false);

    jwt.verify(token, process.env.JWT_SECRET);

    res.send(true);
  } catch (err) {
    handleErrors(err);
    res.json(false);
  }
};

module.exports.getUser = (req, res) => {
  try {
    //const token = req.headers.cookie.split("=")[1];
    const token = req.cookies.token;
    if (!token) return res.json(false);

    jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
      if (err) {
        res.locals.user = null;
        res.status(404).send(false);
      } else {
        let user = await User.findById(decodedToken.id);
        //res.locals.user = user.role;
        const { password, ...rest } = user._doc;
        res.send(rest);
      }
    });
  } catch (err) {
    console.log(err);
  }
};

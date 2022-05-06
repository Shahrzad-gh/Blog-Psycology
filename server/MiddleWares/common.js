const jwt = require("jsonwebtoken");
const User = require("../Models/User");

const requireAuth = (req, res, next) => {
  const token = req.cookies.token;

  // check json web token exists & is verified
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        console.log("signin please");
      } else {
        next();
      }
    });
  } else {
    console.log("signin please");
  }
};

// check current user
const checkUser = (req, res, next) => {
  const token = req.cookies.token;
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
      if (err) {
        res.locals.user = null;
        next();
      } else {
        let user = await User.findById(decodedToken.id);
        res.locals.user = user;
        next();
      }
    });
  } else {
    res.locals.user = null;
    res.status(401).json("You can do this only to your account!");
    next();
  }
};

const adminMiddleware = (req, res, next) => {
  if (res.locals.user.role !== "admin") {
    return res.status(400).json({ message: "Admin access denied" });
  }
  next();
};

module.exports = { checkUser, adminMiddleware };

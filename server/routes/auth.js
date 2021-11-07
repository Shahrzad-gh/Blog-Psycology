const { Router } = require("express");
const authController = require("../Controllers/Auth");

const router = Router();

router.post("/signin", authController.login_post);

module.exports = router;

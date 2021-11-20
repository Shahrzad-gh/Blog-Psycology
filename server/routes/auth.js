const { Router } = require("express");
const authController = require("../Controllers/Auth");

const router = Router();

router.post("/signin", authController.login_post);
router.post("/register", authController.register_post);
router.get("/loggedIn", authController.loggedIn_get);
router.get("/signout", authController.logout_get);
router.get("/getuser", authController.getUser);

module.exports = router;

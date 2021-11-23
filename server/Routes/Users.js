const { Router } = require("express");
const userController = require("../Controllers/Users");
const { checkUser } = require("../MiddleWares/common");
const router = Router();
const upload = require("../utils/multer");

router.delete("/remove/:id", checkUser, userController.removeUser_delete);
router.put(
  "/edit/:username",
  checkUser,
  upload.single("photo"),
  userController.editUser_put
);
router.get("/get/user/:id", userController.getUserById_get);
router.get("/get", userController.getUserByUsername_get);

module.exports = router;

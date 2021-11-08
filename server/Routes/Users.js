const { Router } = require("express");
const userController = require("../Controllers/Users");
const { checkUser } = require("../MiddleWares/common");
const router = Router();

router.delete("/remove/:id", checkUser, userController.removeUser_delete);
router.put("/edit/:id", checkUser, userController.editUser_put);
router.get("/get/:id", userController.getUserById_get);

module.exports = router;

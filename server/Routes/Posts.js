const { Router } = require("express");
const postController = require("../Controllers/Posts");
const { checkUser } = require("../MiddleWares/common");
const upload = require("../utils/multer");

const router = Router();

router.post(
  "/add",
  checkUser,
  upload.single("photo"),
  postController.addPost_post
);
router.delete("/remove/:id", checkUser, postController.removePost_delete);
router.put(
  "/edit/:id",
  checkUser,
  upload.single("photo"),
  postController.editPost_put
);
router.get("/getall", postController.getAllPosts_get);
router.get("/get/:id", postController.getPostById_get);

module.exports = router;

const { Router } = require("express");
const postController = require("../Controllers/Posts");
const { checkUser } = require("../MiddleWares/common");

const router = Router();

router.post("/add", postController.addPost_post);
router.delete("/remove/:id", checkUser, postController.removePost_delete);
router.put("/edit/:id", checkUser, postController.editPost_put);
router.get("/getalls", postController.getAllPosts_get);
router.get("/getbyid", postController.getPostById_get);

module.exports = router;

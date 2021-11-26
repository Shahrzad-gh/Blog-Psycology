const { Router } = require("express");
const { adminMiddleware } = require("../MiddleWares/common");
const blogController = require("../Controllers/Blog");
const upload = require("../utils/multer");

const router = Router();

router.put("/edit", blogController.editBlog_put);
router.get("/get", blogController.getBlog_get);

module.exports = router;

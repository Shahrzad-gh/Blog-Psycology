const { Router } = require("express");
const categoryController = require("../Controllers/Categories");
const router = Router();

router.post("/add", categoryController.addCat_post);
// router.delete("/remove", categoryController.removeCat_delete);
// router.put("/edit", categoryController.editCat_put);
router.get("/getall", categoryController.getAllCats_get);
router.get("/get/:id", categoryController.getCatById_get);

module.exports = router;

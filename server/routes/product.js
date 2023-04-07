const productController = require("../controllers/product");
const { upload } = require("../multer");

const router = require("express").Router();

router.get("/get-all", productController.getAll);

router.get("/get-one/:id", productController.getOneById);

router.post("/create-one", productController.createOne);

router.put("/update-one/:id", productController.updateOne);

router.delete("/delete-one/:id", productController.deleteOne);

router.post("/add-new", upload.single("image"), productController.addNew);

router.put("/edit-one/:id", upload.single("image"), productController.editOne);

router.get("/get-by-category/:id", productController.getByCategoryId);

module.exports = router;
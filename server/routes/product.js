const productController = require("../controllers/product");

const router = require("express").Router();

router.get("/get-all", productController.getAll);

router.post("/create-one", productController.createOne);

router.put("/update-one/:id", productController.updateOne);

router.delete("/delete-one/:id", productController.deleteOne);

module.exports = router;
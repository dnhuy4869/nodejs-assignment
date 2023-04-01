const productController = require("../controllers/product");

const router = require("express").Router();

router.get("/get-all", productController.getAll);

module.exports = router;
const categoryController = require("../controllers/category");

const router = require("express").Router();

router.get("/get-all", categoryController.getAll);

router.post("/create-one", categoryController.createOne);

router.put("/update-one/:id", categoryController.updateOne);

module.exports = router;
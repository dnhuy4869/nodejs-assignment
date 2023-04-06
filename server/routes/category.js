const categoryController = require("../controllers/category");

const router = require("express").Router();

router.get("/get-all", categoryController.getAll);

router.get("/get-one/:id", categoryController.getOneById);

router.post("/create-one", categoryController.createOne);

router.put("/update-one/:id", categoryController.updateOne);

router.delete("/delete-one/:id", categoryController.deleteOne);

module.exports = router;
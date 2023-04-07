const Product = require("../models/product");
const Category = require("../models/category");

const getAll = async (req, res) => {
    try {
        const products = await Product.find();

        return res.status(200).json(products);
    }
    catch (err) {
        return res.status(500).json({
            message: "Internal server error",
            error: err,
        })
    }
}

const createOne = async (req, res) => {
    try {
        if (!req.body.idCategory)
        {
            return res.status(404).json({
                message: "Category is not exist",
            })
        }

        const cate = await Category.findById(req.body.idCategory);
        if (!cate) {
            return res.status(404).json({
                message: "Category is not exist",
            })
        }

        const newProduct = await new Product(req.body);
        await newProduct.save();

        return res.status(200).json({
            message: "Created successfully"
        })
    }
    catch (err) {
        return res.status(500).json({
            message: "Internal server error",
            error: err,
        })
    }
}

const updateOne = async (req, res) => {
    try {
        if (!req.body.idCategory)
        {
            return res.status(404).json({
                message: "Category is not exist",
            })
        }

        const cate = await Category.findById(req.body.idCategory);
        if (!cate) {
            return res.status(404).json({
                message: "Category is not exist",
            })
        }

        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(403).json({
                message: "Product is not exist",
            })
        }

        await product.updateOne(req.body);

        return res.status(200).json({
            message: "Updated successfully",
        })
    }
    catch (err) {
        return res.status(500).json({
            message: "Internal server error",
            error: err,
        })
    }
}

const deleteOne = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(403).json({
                message: "Product is not exist",
            })
        }

        await product.deleteOne();

        return res.status(200).json({
            message: "Deleted successfully",
        });
    }
    catch (err) {
        return res.status(500).json({
            message: "Internal server error",
            error: err,
        })
    }
}

const addNew = async (req, res) => {
    try {
        if (!req.body.idCategory)
        {
            return res.status(404).json({
                message: "Category is not exist",
            })
        }

        const cate = await Category.findById(req.body.idCategory);
        if (!cate) {
            return res.status(404).json({
                message: "Category is not exist",
            })
        }

        const data = {
            name: req.body.name,
            price: req.body.price,
            idCategory: req.body.idCategory,
            image: req.body.imageName,
        }

        const newProduct = await new Product(data);
        await newProduct.save();

        return res.status(200).json({
            message: "Created successfully"
        })
    }
    catch (err) {
        return res.status(500).json({
            message: "Internal server error",
            error: err,
        })
    }
}

const getOneById = async (req, res) => {
    try {
        const cate = await Product.findById(req.params.id);
        if (!cate) {
            return res.status(403).json({
                message: "Product is not exist",
            })
        }

        return res.status(200).json(cate);
    }
    catch (err) {
        return res.status(500).json({
            message: "Internal server error",
            error: err,
        })
    }
}

const editOne = async (req, res) => {
    try {
        if (!req.body.idCategory)
        {
            return res.status(404).json({
                message: "Category is not exist",
            })
        }

        const cate = await Category.findById(req.body.idCategory);
        if (!cate) {
            return res.status(404).json({
                message: "Category is not exist",
            })
        }

        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(403).json({
                message: "Product is not exist",
            })
        }

        let data = {
            name: req.body.name,
            price: req.body.price,
            idCategory: req.body.idCategory,
        }

        if (req.body.imageName) {
            data.image = req.body.imageName;
        }

        await product.updateOne(data);

        return res.status(200).json({
            message: "Updated successfully",
        })
    }
    catch (err) {
        return res.status(500).json({
            message: "Internal server error",
            error: err,
        })
    }
}

const getByCategoryId = async (req, res) => {
    try {
        const cate = await Category.findById(req.params.id);
        if (!cate) {
            return res.status(403).json({
                message: "Category is not exist",
            })
        }

        const products = await Product.find({ idCategory: req.params.id});

        return res.status(200).json(products);
    }
    catch (err) {
        return res.status(500).json({
            message: "Internal server error",
            error: err,
        })
    }
}

module.exports = {
    getAll,
    createOne,
    updateOne,
    deleteOne,
    addNew,
    getOneById,
    editOne,
    getByCategoryId,
}
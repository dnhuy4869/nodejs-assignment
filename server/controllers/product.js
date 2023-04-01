const Product = require("../models/product")

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

module.exports = {
    getAll,
}
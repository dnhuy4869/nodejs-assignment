const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    image: {
        type: String,
        default: "",
    },
    price: {
        type: Number,
        default: 0,
    },
    idCategory: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
})

module.exports = mongoose.model("Product", productSchema);
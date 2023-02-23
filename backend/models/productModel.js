const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    // user: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     required: true,
    //     ref: "User",  
    // },
    name: {
        type: String,
        required: [true, "Please enter a name"],
        trim: true
    },
    sku: {
        type: String,
        required: true,
        trim: true,
        default: "SKU",
        trim: true
    },
    category: {
        type: String,
        required: [true, "Please enter a category"],
        trim: true
    },
    quantity: {
        type: Number,
        required: [true, "Please enter a quantity"],
        trim: true
    },
    price: {
        type: Number,
        required: [true, "Please enter a price"],
        trim: true
    },
    description: {
        type: String,
        required: [true, "Please enter a description"],
        trim: true
    },
}, {
    timestamps: true
});

const Product = mongoose.model("Product", productSchema)
module.exports = Product;
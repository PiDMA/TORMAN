const asyncHandler = require('express-async-handler');
const Product = require('../models/productModel');

//Create a product
const createProduct = asyncHandler(async (req, res) => {
    const { name, sku, category, quantity, price, description } = req.body;
    const product = await Product.create({
        // user: req.user.id,
        name,
        sku,
        category,
        quantity,
        price,
        description,
      }); 

      res.status(201).json(product);
});

//getAllProducts
const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.status(200).json(products);
});

//Get specific product
const getProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
        res.status(200).json(product);
    } else {
        res.status(404);
        throw new Error("Product not found");
    }
});

//Deleting product
const deleteProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
        await product.remove();
        res.status(200).json({ message: "Product removed" });
    } else {
        res.status(404);
        throw new Error("Product not found");
    }
});

//updateProduct TO DO 
// const updateProduct = asyncHandler(async (req, res) => {
//     const { name, category, quantity, price, description } = req.body;
//     const { id } = req.params;

//     const product = await Product.findById(id);

//     if(!product){
//         res.status(404);
//         throw new Error("Product not found");
//     }

//     const updatedProduct = await Product.findByIdAndUpdate(id, {
//         name: name || product.name,
//         category: category || product.category,
//         quantity: quantity || product.quantity,
//         price: price || product.price,
//         description: description || product.description,
//     }, {new: true
        
//     })
//     res.status(200).json(updatedProduct);
// });

  //updateProduct removed from below TODO

module.exports = { createProduct, getProducts, getProductById, deleteProductById, };
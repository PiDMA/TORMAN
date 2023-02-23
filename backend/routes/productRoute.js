const express = require("express");
//updateProduct TO DO removed from below
const { createProduct, getProducts, getProductById, deleteProductById, } = require("../controllers/productController");
const router = express.Router();

router.post("/", createProduct)
router.get("/", getProducts)
router.get("/:id", getProductById)
router.delete("/:id", deleteProductById)
// router.patch("/:id", updateProduct)

module.exports = router;
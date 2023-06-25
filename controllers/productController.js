import asyncHandler from '../middleware/asyncHandler.js';
import Product from '../models/productModel.js';

/**
 * @desc   Get all products
 * @route  GET /api/products
 * @access Public
 */
const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
});


/**
 * @desc   Get a product by ID
 * @route  GET /api/products/:id
 * @access Public
 */
const getProductsById = asyncHandler(async (req, res) => {
    let product = await Product.findById(req.params.id);

    if (product) {
        res.json(product);
    } else {
        res.status(404);
        throw new Error('Product not found');
    }
});

export { getProducts, getProductsById };

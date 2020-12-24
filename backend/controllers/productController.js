const asyncHandler = require('express-async-handler')
const Product = require('../models/Product')

// @route       POST /api/product
// @desc        Create new product
// @access      Private / Admin

const createProduct = asyncHandler(async (req, res) => {
  const { price, name, description, planId } = req.body

  const product = await Product.create({
    price,
    name,
    description,
    planId,
  })
  if (product) {
    res.status(201).json({
      _id: product._id,
      name: product.name,
      price: product.price,
      description: product.description,
      planId: product.planId,
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})

// @route       GET /api/product
// @desc        Get all products
// @access      Public

const getAllProducts = asyncHandler(async (req, res) => {
  const products = await Product.find()
  res.json(products)
})

// @route       GET /api/product/:id
// @desc        Get product by ID
// @access      Public

const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)
  if (product) {
    res.json(product)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

// @route       PUT /api/product/:id
// @desc        Update a product by ID
// @access      Private

const updateProductById = asyncHandler(async (req, res) => {
  const { name, price, description, planId } = req.body

  const product = await Product.findById(req.params.id)
  if (product) {
    product.name = name ? name : product.name
    product.price = price ? price : product.price
    product.description = description ? description : product.description
    product.planId = planId ? planId : product.planId
    const updatedProduct = await product.save()
    res.status(201).json(updatedProduct)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProductById,
}

const express = require('express')

const router = express.Router()

// Middleware

const { protect, admin } = require('../middleware/authMiddleware')

// Controllers

const {
  createProduct,
  getAllProducts,
  getProductById,
  updateProductById,
} = require('../controllers/productController')

// Routes

router.route('/').post(createProduct).get(getAllProducts)

router.route('/:id').get(getProductById).put(updateProductById)

module.exports = router

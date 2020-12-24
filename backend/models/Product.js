const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    default: 0,
  },
  description: {
    type: String,
    required: true,
  },
  planId: {
    type: String,
    required: true,
  },
})

module.exports = Product = mongoose.model('Product', ProductSchema)

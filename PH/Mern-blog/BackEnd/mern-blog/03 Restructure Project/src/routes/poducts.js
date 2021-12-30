// Memanggil express
const express = require('express')

// Memanggil router
const router = express.Router()


// Memanggil product controller
const productController = require('../controllers/products')

// CREATE => POST
router.post('/product', productController.createProduct)

// READ => GET
router.get('/products', productController.getAllProducts)

// Mengexports router
module.exports = router
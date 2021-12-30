// Memanggil express
const express = require('express')

// Memanggil router
const router = express.Router()


// Memanggil product controller
const productController = require('../controllers/products')

// CREATE -> POST : loacalhost:4000/v1/customer/product
router.post('/product', productController.createProduct)

// READ -< GET : localhost:4000/v1/customer/products
router.get('/products', productController.getAllProducts)

// Mengexports router
module.exports = router
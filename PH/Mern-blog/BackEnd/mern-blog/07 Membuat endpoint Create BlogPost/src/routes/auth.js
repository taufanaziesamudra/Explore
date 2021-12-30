// Memanggil express
const express = require('express')
// Memanggil routes
const router = express.Router()

const authController = require('../controllers/auth')

router.post('/register', authController.register)

router.post('/login', authController.login)

module.exports = router
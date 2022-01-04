// Memanggil express
const express = require('express')
const { body } = require('express-validator')
// Memanggil routes
const router = express.Router()

const authController = require('../controllers/auth')

router.post('/register', [ // routes register
    body('name').isLength({ min: 5 }).withMessage('Input name tidak valid'),
    body('email').isLength({ min: 5 }).withMessage('Input email tidak sesuai'),
    body('password').isLength({ min: 5 }).withMessage('Input password tidak sesuai')],
    authController.register)

router.post('/login', [ // routes login
    body('email').isLength({ min: 5 }).withMessage('Input name kurang'),
    body('password').isLength({ min: 5 }).withMessage('Input password kurang')],
    authController.login)

module.exports = router
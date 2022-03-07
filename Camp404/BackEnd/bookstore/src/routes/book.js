const express = require('express')

const router = express.Router()

const bookController = require('../contollers/book')

router.post('/c1/book', bookController.createBook)

router.get('/c1/books', bookController.getAllBooks)

module.exports = router
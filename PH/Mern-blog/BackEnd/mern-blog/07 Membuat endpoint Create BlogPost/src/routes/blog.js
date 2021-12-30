const express = require('express') // Memanggil express

const router = express.Router() // Memanggil router

const blogContoller = require('../controllers/blog') // Memanggil controll blog

// [POST] : /v1/blog/post
router.post('/post', blogContoller.createBlogPost)

module.exports = router
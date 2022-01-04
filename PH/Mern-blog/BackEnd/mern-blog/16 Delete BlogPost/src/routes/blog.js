const express = require('express') // Memanggil express
const { body } = require('express-validator') // Memanggil express validator

const router = express.Router() // Memanggil router

const blogContoller = require('../controllers/blog') // Memanggil controll blog

// [POST] : /v1/blog/post
router.post('/post', [
    body('title').isLength({ min: 5 }).withMessage('Input title tidak sesuai'), // Mininmal 5 karater dengan pesan 
    body('body').isLength({ min: 5 }).withMessage('Input body tidak sesaui')], // Mininmal 5 karater dengan pesan
    blogContoller.createBlogPost)

// Pemanggilan Get All Blog
router.get('/posts', blogContoller.getAllBlogPost)

// Pemanggilan Blog Post Berdasarkan ID
router.get('/post/:postId', blogContoller.getBlogPostById)

// Update Blog Post
router.put('/post/:postId', [
    body('title').isLength({ min: 5 }).withMessage('input tidak sesuai'),
    body('body').isLength({ min: 5 }).withMessage('Input body tidak seusai')],
    blogContoller.updateBlogPost)

// Delete Blog Post
router.delete('/post/:postId', blogContoller.deleteBlogPost)

module.exports = router
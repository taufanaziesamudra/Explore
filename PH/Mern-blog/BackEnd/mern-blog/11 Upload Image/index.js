const express = require('express') // Memanggil express
const bodyParser = require('body-parser') // Memanggil bodyparser
const mongoose = require('mongoose')
const multer = require('multer') // Memanggil Multer

const app = express() // Menggunakan express
const authRoutes = require('./src/routes/auth') // Memanggil auth routes
const blogRoutes = require('./src/routes/blog') // Memanggil blog routes

const fileStorage = multer.diskStorage({ // Menyiapkan Peyimpnan File
    destination: (req, file, cb) => {
        cb(null, 'images')
    },
    filename: (req, file, cb) => {
        cb(null, new Date().getTime() + '-' + file.originalname)
    }
})

const fileFilter = (req, file, cb) => { // Meyiapkan Format File
    if (file.mimetype === 'image/png' ||
        file.mimetype === 'image/jpg' ||
        file.mimetype === 'image/jpeg') {
        cb(null, true)
    } else {
        cb(null, false)
    }
}

app.use(bodyParser.json()) // Menggunakan bodypaser (Type JSON)
app.use(multer({ storage: fileStorage, fileFilter: fileFilter }).single('image')) // Middlware image

// Mengatasi CORS ORIGIN
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    next()
})

// Menggunakan routes
app.use('/v1/auth', authRoutes) // endpoint untuk AUTH
app.use('/v1/blog', blogRoutes) // endpoint untuk blog

// Default error untuk user
app.use((error, req, res, next) => { // Pesan error yang akan dikirim ke blog controller
    const status = error.errorStatus || 500 // Mengirimkan error status
    const message = error.message
    const data = error.data // Mengrimkan paramerter error yang akan dibaca oleh res.status(status) yang dinamis
    res.status(status).json({ message: message, data: data })
    // res.status(400).json({ message: 'Error', data: 'data disini' })
})

// Koneksi ke database
mongoose.connect('mongodb+srv://Taufan:KnxW1HKPDNYA3rYl@cluster0.d8w7i.mongodb.net/BLOG?retryWrites=true&w=majority')
    .then(() => {
        app.listen(4000, () => console.log('Koneksi Berhasil')) // Menggunakan server
    })
    .catch(err => console.log(err)) // Melihat error

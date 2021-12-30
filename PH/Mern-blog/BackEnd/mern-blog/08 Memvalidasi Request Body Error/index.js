const express = require('express') // Memanggil express
const bodyParser = require('body-parser') // Memanggil bodyparser
const mongoose = require('mongoose') // Memanggil mongoose

const app = express() // Menggunakan express
const authRoutes = require('./src/routes/auth') // Memanggil auth routes
const blogRoutes = require('./src/routes/blog') // Memanggil blog routes

app.use(bodyParser.json()) // Menggunakan bodypaser (Type JSON)
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

// Defafult error untuk user
app.use((error, req, res, next) => { // Pesan error yang akan dikirim ke blog contoroler
    const status = error.errorStatus || 500 // Mengirimkan error status
    const message = error.message
    const data = error.data // Mengrimkan paramerter error yang akan dibaca oleh res.status(status) yang dinamis
    res.status(status).json({ message: message, data: data })
    // res.status(400).json({ message: 'Error', data: 'data disini' })
})

mongoose.connect('mongodb+srv://taufan:YDvYkP94uneMc9lG@mernchapter2.mxirm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    .then(() => {
        app.listen(4000, () => console.log('Koneksi Berhasil')) // Menggunakan server
    })
    .catch(err => console.log(err))

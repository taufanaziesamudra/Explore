const express = require('express') // Memanggil express
const bodyParser = require('body-parser') // Memanggil bodyparser

const app = express() // Menggunakan express
const productRoutes = require('./src/routes/poducts') // Memanggil routes
const authRoutes = require('./src/routes/auth') // Memanggil auth

app.use(bodyParser.json()) // Menggunakan bodypaser (Type JSON)

// Mengatasi CORS ORIGIN
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    next()
})
// Menggunakan routes
// app.use('/', productRoutes)
// endpoint untuk produc
app.use('/v1/customer', productRoutes)
// endpoint untuk AUTH
app.use('/v1/auth', authRoutes)

app.listen(4000)
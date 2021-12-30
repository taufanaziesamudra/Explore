// Memanggil express
const express = require('express')
// Memanggil bodyparser
const bodyParser = require('body-parser')

// Menggunakan express
const app = express()
// Memanggil routes
const productRoutes = require('./src/routes/poducts')
// Menggunakan bodypaser
app.use(bodyParser.json()) // Type JSON
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

app.listen(4000)
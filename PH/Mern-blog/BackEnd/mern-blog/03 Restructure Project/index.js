// Memanggil express
const express = require('express')

// Menggunakan express
const app = express()
// Memanggil routes
const productRoutes = require('./src/routes/poducts')
// Menggunakan routes
app.use('/', productRoutes)

app.listen(4000)
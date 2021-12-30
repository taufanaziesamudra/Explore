// console.log('hello') => node index.js

// Memanggil express
const express = require('express')
// Menggunakan express
const app = express()
// Memanggil routes
const router = express.Router()

router.use('/products', (req, res, next) => {
    // console.log('url: ', req.originalUrl)
    // console.log('method: ', req.method)
    res.json({ name: "Taufan Ajie Samudro", email: "Taufanaziesamudra@gmail.com" })
    // next untuk menghentikan loadinmg terus menerus
    next()
})

router.use('/price', (req, res, next) => {
    res.json({ price: 1000000 })
    next()
})

router.get('/customer', (req, res, next) => {
    res.json({ title: "Customer" })
})

// Menggunakan routes
app.use('/', router)
// app.use(() => {
//     console.log('hello server')
//     console.log('Taufan Jello')
// })
app.listen(4000)
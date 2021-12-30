// console.log('hello') => node index.js

// Memanggil express
const express = require('express')
// Menggunakan express
const app = express()
// Memanggil use
app.use(() => {
    console.log('hello server')
    console.log('Taufan Jello')
})
app.listen(4000)
const express = require('express')

const app = express()
const bookRoutes = require('./src/routes/book')


app.use((req, res, next) => {
    res.setHeader('Acces-Control-Allow-Origin', '*')
    res.setHeader('Acces-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS')
    res.setHeader('Acces-Control-Allow-Headers', 'Content-Type, Autorization')
    next()
})
app.use('/', bookRoutes)

app.listen(4000)
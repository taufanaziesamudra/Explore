const { validationResult } = require('express-validator')
const RegistrasiPost = require('../models/auth') // Memanggil Model registrasipost
const LoginPost = require('../models/auth')

exports.register = (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    const errors = validationResult(req) // Memvalidasi error
    if (!errors.isEmpty()) {
        const err = new Error('Invalid value tidak sesuai')
        err.errorStatus = 400
        err.data = errors.array()
        throw err
    }

    const Posting = new RegistrasiPost({
        name: name,
        email: email,
        password: password,
    })

    Posting.save()
        .then(result => {
            res.status(201).json({
                message: "Regitrasi Succes",
                data: result
            })
        })
        .catch(err => {
            console.log('err', err)
        })
}

exports.login = (req, res, next) => {
    const email = req.body.email;
    const pasword = req.body.password;

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        const err = new Error('Invalid value tidak ok')
        err.errorStatus = 400
        err.data = errors.array()
        throw err
    }

    const LogPost = new LoginPost({
        email: email,
        password: password
    })

    LogPost.save()
        .then(result => {
            res.status(201).json({
                message: "Login Succes",
                data: result
            })
        })
        .catch(err => {
            console.log('err', err)
        })
}
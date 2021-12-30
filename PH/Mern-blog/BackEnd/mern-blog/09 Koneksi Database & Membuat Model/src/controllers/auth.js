const { validationResult } = require('express-validator')
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
    const result = {
        message: "Registrai Succes",
        data: {
            uid: 1,
            name: name,
            email: email,
            password: password,
        }
    }
    res.status(201).json(result);
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

    const result = {
        message: "Login Succes",
        data: {
            uid: 1,
            email: email,
            pasword: pasword,
        }
    }
    res.status(201).json(result)
}
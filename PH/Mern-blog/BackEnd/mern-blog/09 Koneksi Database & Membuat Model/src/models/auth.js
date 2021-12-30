const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RegistrasiPost = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
})

const LoginPost = new Schema({
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('RegistrasiPost', 'LoginPost', RegistrasiPost, LoginPost)
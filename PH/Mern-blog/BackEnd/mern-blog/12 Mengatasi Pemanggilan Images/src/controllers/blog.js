const { validationResult } = require('express-validator')
const BlogPost = require('../models/blog') // Memanggil Model blogpost

exports.createBlogPost = (req, res, next) => {
    const errors = validationResult(req) // Memvalidasi error
    if (!errors.isEmpty()) {
        const err = new Error('Ivalid value tidak sesuai') // didapatkan dari index
        err.errorStatus = 400
        err.data = errors.array()
        throw err
        // console.log('err: ', errors)
        // res.status(400).json({
        //     message: "Request Error",
        //     data: null
        // })
    }

    if (!req.file) {
        const err = new Error('Image harus diupload')
        err.errorStatus = 442
        throw err
    }

    const title = req.body.title;
    const image = req.file.path;
    const body = req.body.body;

    const Posting = new BlogPost({ // Membuat variabel dari BlogPost
        title: title,
        body: body,
        image: image,
        author: { uid: 1, name: 'Taufan Ajie Samudro' }
    })

    Posting.save()
        .then(result => {
            res.status(201).json({
                message: 'Create Blog Post Succes',
                data: result
            })
        })
        .catch(err => {
            console.log('err', err)
        })
}
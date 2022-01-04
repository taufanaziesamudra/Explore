const { validationResult } = require('express-validator')
const BlogPost = require('../models/blog') // Memanggil Model blogpost
const path = require('path') // Memanggil path (untuk mengetahui posisi dari image)
const fs = require('fs') // Memanggil FileSystem
const { dirname } = require('path')

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

exports.getAllBlogPost = (req, res, next) => {
    const curretPage = req.query.page || 1 // Variabel untk page
    const perPage = req.query.perPage || 5 // Variabel untuk PerPage
    let totalItems; // Jumlah data yang dimiliki

    BlogPost.find()
        .countDocuments() // Menghitung seluruh data
        .then(count => { // Menerima jumlah data
            totalItems = count
            return BlogPost.find() // Memanggil seluruh data atau membuat return untuk membuat promise baru
                .skip((parseInt(curretPage) - 1) * parseInt(perPage)) // Skip untuk melewati beberapa data
                .limit(parseInt(perPage)) // Data yang diberikan (limit)
        })
        .then(result => {
            res.status(200).json({
                message: 'Data Berhasil ditampilkan',
                data: result,
                total_data: totalItems,
                per_Page: parseInt(perPage),
                current_Page: parseInt(curretPage)
            })
        })
        .catch(err => {
            next(err)
        })
}

exports.getBlogPostById = (req, res, next) => {
    const postId = req.params.postId
    BlogPost.findById(postId)
        .then(result => {
            if (!result) { // Jika data tidak ditemukan
                const error = new Error('Blog Post tidak ditemuka')
                error.errorStatus = 404
                throw error
            }
            res.status(200).json({
                message: 'Data Blog By Id Succes',
                data: result
            })
        })
        .catch(err => {
            next(err)
        })
}

exports.updateBlogPost = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        const err = new Error('Invalid tidak sesuai')
        err.errorStatus = 400
        err.data = errors.array()
        throw err
    }

    if (!req.file) {
        const err = new Error('Image harus diupload')
        err.errorStatus = 422
        throw err
    }

    const title = req.body.title
    const image = req.file.path
    const body = req.body.body
    const postId = req.params.postId

    BlogPost.findById(postId)
        .then(post => {
            if (!post) {
                const err = new Error('BlogPost Gak ditemukan')
                err.errorStatus = 404
                throw err
            }

            post.title = title
            post.body = body
            post.image = image

            return post.save()
        })
        .then(result => {
            res.status(200).json({
                message: 'Update sukses',
                data: result
            })
        })
        .catch(err => {
            next(err)
        })
}

exports.deleteBlogPost = (req, res, next) => {
    const postId = req.params.postId

    BlogPost.findById(postId)
        .then(post => {
            if (!post) { // Mengecek postingan byId
                const error = new Error("Blog yang mau didelete Nothing")
                error.errorStatus = 404
                throw error
            }

            removeImage(post.image)
            return BlogPost.findByIdAndRemove(postId)
        })

        .then(result => {
            res.status(200).json({
                message: 'Delete Succes',
                data: result
            })
        })

        .catch(err => {
            next(err)
        })

    const removeImage = (filePath) => { // Function untuk menghapus image
        // console.log('filepath', filePath) // Cek filepath
        // console.log('dirname', __dirname) // Cek lokasi gambar

        filePath = path.join(__dirname, '../../', filePath) // Mengecek path
        fs.unlink(filePath, err => console.log(err))
    }
}
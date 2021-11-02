import axios from "axios";

// Varibeal untuk memanggil API
const RoothPath = 'http://localhost:3004'
const onlineRoot = 'https://jsonplaceholder.typicode.com'

const Get = (path, root) => {
    const promise = new Promise((resolve, reject) => {
        // Jika root bernilai true maka tampilkan onlineRoot
        // sedangkan bila bernilai false maka tampilan RoothPath
        axios.get(`${root ? onlineRoot : RoothPath}/${path}`)
            .then((result) => {
                resolve(result.data)
            }, (err) => {
                reject(err)
            })
    })
    return promise
}

const Post = (path, root, data) => {
    const promise = new Promise((resolve, reject) => {
        axios.post(`${root ? onlineRoot : RoothPath}/${path}`, data)
            .then((result) => {
                resolve(result.data)
            }, (err) => {
                reject(err)
            })
    })
    return promise
}

const Delete = (path, root) => {
    const promise = new Promise((resolve, reject) => {
        axios.delete(`${root ? onlineRoot : RoothPath}/${path}`)
            .then((result) => {
                resolve(result.data)
            }, (err) => {
                reject(err)
            })
        return promise
    })
}

// DELETE
const deleteNewsBlog = (id) => Delete(`posts/${id}`, false)

// POST
const postNewsBlog = (data) => Post('posts', false, data)

// GET
const getNewsBlog = () => Get('posts?_sort=id&_order=desc', false)
const getComments = () => Get('comments', true)

const API = {
    deleteNewsBlog,
    postNewsBlog,
    getNewsBlog,
    getComments
}

export default API
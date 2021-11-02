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

const getNewsBlog = () => Get('posts?_sort=id&_order=desc', false)
const getComments = () => Get('comments', true)

const API = {
    getNewsBlog,
    getComments
}

export default API
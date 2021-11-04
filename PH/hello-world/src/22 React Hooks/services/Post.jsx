import axios from "axios"
import { onlineRoot, RoothPath } from './config'

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

export default Post
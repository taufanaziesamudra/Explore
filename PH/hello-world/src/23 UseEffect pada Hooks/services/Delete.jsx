import axios from "axios"
import { onlineRoot, RoothPath } from './config'

const Delete = (path, root) => {
    const promise = new Promise((resolve, reject) => {
        axios.delete(`${root ? onlineRoot : RoothPath}/${path}`)
            .then((result) => {
                resolve(result.data)
            }, (err) => {
                reject(err)
            })
    })
    return promise
}

export default Delete
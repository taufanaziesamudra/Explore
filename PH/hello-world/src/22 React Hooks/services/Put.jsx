import axios from "axios"
import { onlineRoot, RoothPath } from './config'

const Put = (path, root, data) => {
    const promise = new Promise((resolve, reject) => {
        axios.put(`${root ? onlineRoot : RoothPath}/${path}`, data)
            .then((result) => {
                resolve(result)
            }, (err) => {
                reject(err)
            })
    })
    return promise
}

export default Put
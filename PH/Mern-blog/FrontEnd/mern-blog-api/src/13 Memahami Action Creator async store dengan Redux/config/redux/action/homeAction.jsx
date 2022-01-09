import axios from "axios"

export const setDataBlog = () => {
    return (dispatch) => {
        axios.get('http://localhost:4000/v1/blog/posts?page=2&perPage=2') // Pemanggilan ke Backend
            .then(result => {
                const responseAPI = result.data // Membuat variable untuk data dari backend

                dispatch({ type: 'UPDATE_DATA_BLOG', payload: responseAPI.data })
            })
            .catch(err => {
                console.log('error', err)
            })
    }
}
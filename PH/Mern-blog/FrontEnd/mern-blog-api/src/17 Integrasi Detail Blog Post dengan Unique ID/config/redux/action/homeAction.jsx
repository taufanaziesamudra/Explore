import axios from "axios"

export const setDataBlog = (page) => { // Mengirimkan param page
    return (dispatch) => {
        axios.get(`http://localhost:4000/v1/blog/posts?page=${page}&perPage=2`) // Pemanggilan ke Backend dan set up page
            .then(result => {
                const responseAPI = result.data // Membuat variable untuk data dari backend
                // console.log('responAPI: ', responseAPI)
                dispatch({ type: 'UPDATE_DATA_BLOG', payload: responseAPI.data })
                dispatch({
                    type: 'UPDATE_PAGE',
                    payload: {
                        currentPage: responseAPI.current_Page,
                        totalPage: Math.ceil(responseAPI.total_data / responseAPI.per_Page) // Pembulatan ke atas menggunakan math
                    }
                })
            })
            .catch(err => {
                console.log('error', err)
            })
    }
}
import Get from "./Get";
import Post from "./Post";
import Delete from "./Delete";
import Put from "./Put";

// DELETE
const deleteNewsBlog = (id) => Delete(`posts/${id}`, false)

// PUT
const updateNewsBlog = (data, id) => Put(`posts/${id}`, false, data)

// POST
const postNewsBlog = (data) => Post('posts', false, data)

// GET
const getNewsBlog = () => Get('posts?_sort=id&_order=desc', false)
const getComments = () => Get('comments', true)

const API = {
    deleteNewsBlog,
    updateNewsBlog,
    postNewsBlog,
    getNewsBlog,
    getComments
}

export default API
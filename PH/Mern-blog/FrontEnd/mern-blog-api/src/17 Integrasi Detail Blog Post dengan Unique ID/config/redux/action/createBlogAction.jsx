import axios from "axios"

export const setForm = (formType, formValue) => {
    return { type: 'SET_FORM_DATA', formType, formValue }
}

export const setImgPreview = () => {
    return { type: 'SET_IMG_PREWIEW' }
}

export const postToAPI = (form) => { // data dikirimkan dari depan
    // membuat variabel yang akan dikirimkan ke new blog
    const data = new FormData()
    data.append('title', form.title)
    data.append('body', form.body)
    data.append('image', form.image)

    axios.post('http://localhost:4000/v1/blog/post/', data, {
        headers: { // dari postman
            'content-type': 'multipart/form-data'
        }
    })
        .then(res => {
            console.log('post succes', res)
        })
        .catch(err => {
            console.log('err: ', err)
        })
}
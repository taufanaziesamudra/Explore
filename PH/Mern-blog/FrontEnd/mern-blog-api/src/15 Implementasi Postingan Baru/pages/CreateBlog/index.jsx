import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { Button, Gap, Input, Link, TextArea, Upload } from '../../components'
import axios from 'axios'
import './CreateBlog.scss'

const CreateBlog = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [image, setImage] = useState('')
    const [imagePreview, setImagePreview] = useState(null)
    const navigate = useNavigate();

    const onSubmit = () => {
        console.log('title:', title)
        console.log('body', body)
        console.log('image:', image)

        // membuat variabel yang akan dikirimkan ke new blog
        const data = new FormData()
        data.append('title', title)
        data.append('body', body)
        data.append('image', image)

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

    const onImageUplaod = (e) => { // Funciton untuk mengirimkan gambar
        const file = e.target.files[0]
        setImage(file)
        setImagePreview(URL.createObjectURL(file)) // Untuk menerima file
    }
    return (
        <div className='blog-post'>
            <Link title='kembali' onClick={() => navigate('/')} />
            <p className='title'>Create Blog</p>
            <Input label='Post Title' value={title} onChange={(e) => setTitle(e.target.value)} />
            <Upload onChange={(e) => onImageUplaod(e)} img={imagePreview} />
            <TextArea value={body} onChange={(e) => setBody(e.target.value)} />
            <Gap height={20} />
            <div className="button-action">
                <Button title='Save' onClick={onSubmit} />
            </div>
            <Gap height={10} />
        </div>
    )
}

export default CreateBlog

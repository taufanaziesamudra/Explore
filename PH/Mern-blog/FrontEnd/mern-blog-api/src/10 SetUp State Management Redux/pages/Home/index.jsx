import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { Button, Gap } from '../../components'
import BlogItem from '../../components/moleculs/BlogItem'
import './Home.scss'

const Home = () => {
    const [dataBlog, setDataBlog] = useState([])// State untuk Blog Item

    const stateGlobal = useSelector(state => state) // Menggunakan useSelector karena mengunakan fuctional Component
    console.log('state', stateGlobal)
    useEffect(() => { // Pemanggilan GET API
        axios.get('http://localhost:4000/v1/blog/posts?page=2&perPage=2') // Pemanggilan ke Backend
            .then(result => {
                const responseAPI = result.data // Membuat variable untuk data dari backend

                setDataBlog(responseAPI.data) // Set data blog
            })
            .catch(err => {
                console.log('error', err)
            })
    }, [])
    const navigate = useNavigate();

    return (
        <div className='home-page-wrapper'>
            <div className="create-wrapper">
                <Button title='create-blog' onClick={() => navigate('/create-blog')} />
            </div>
            <Gap height={20} />
            <div className="content-wrapper">
                {dataBlog.map(blog => { // Mapping untuk Blog Irtem
                    return <BlogItem
                        key={blog._id}
                        image={`http://localhost:4000/${blog.image}`}
                        title={blog.title}
                        body={blog.body}
                        name={blog.author.name}
                        date={blog.createdAt} />
                })}
            </div>
            <div className="pagination">
                <Button title='Previous' />
                <Gap width={20} />
                <Button title='Next' />
            </div>
            <Gap height={20} />
        </div>
    )
}

export default Home

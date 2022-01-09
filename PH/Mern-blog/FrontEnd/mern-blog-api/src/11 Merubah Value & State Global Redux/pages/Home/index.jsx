import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { Button, Gap } from '../../components'
import BlogItem from '../../components/moleculs/BlogItem'
import './Home.scss'

const Home = () => {
    // const [dataBlog, setDataBlog] = useState([])// State untuk Blog Item

    // const stateGlobal = useSelector(state => state) // Menggunakan useSelector karena mengunakan fuctional Component
    // console.log('stateGlobal:', statGlobal)  )

    const { dataBlogs, name } = useSelector(state => state) // Destructuring
    const disPatch = useDispatch()
    console.log('DataBlogs:', dataBlogs)

    useEffect(() => { // Pemanggilan GET API
        setTimeout(() => {
            disPatch({ type: 'UPDATE_NAME' })
        }, 3000)

        axios.get('http://localhost:4000/v1/blog/posts?page=2&perPage=2') // Pemanggilan ke Backend
            .then(result => {
                const responseAPI = result.data // Membuat variable untuk data dari backend

                // setDataBlog(responseAPI.data) // Set data blog
                disPatch({ type: 'UPDATE_DATA_BLOG', payload: responseAPI.data })
            })
            .catch(err => {
                console.log('error', err)
            })
    }, [disPatch])
    const navigate = useNavigate();

    return (
        <div className='home-page-wrapper'>
            <div className="create-wrapper">
                <Button title='create-blog' onClick={() => navigate('/create-blog')} />
            </div>
            {/* <p>{stateGlobal.name}</p> */}
            <p>{name}</p>
            <Gap height={20} />
            <div className="content-wrapper">
                {dataBlogs.map(blog => { // Mapping untuk Blog Item
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

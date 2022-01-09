import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { Button, Gap } from '../../components'
import BlogItem from '../../components/moleculs/BlogItem'
import { setDataBlog } from '../../config/redux/action/homeAction'
import './Home.scss'

const Home = () => {
    const { dataBlog } = useSelector(state => state.homeReducer) // Destructuring
    const disPatch = useDispatch()

    useEffect(() => {
        disPatch(setDataBlog())
    }, [disPatch])

    const navigate = useNavigate();
    return (
        <div className='home-page-wrapper'>
            <div className="create-wrapper">
                <Button title='create-blog' onClick={() => navigate('/create-blog')} />
            </div>
            <Gap height={20} />
            <div className="content-wrapper">
                {dataBlog.map(blog => { // Mapping untuk Blog Item
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

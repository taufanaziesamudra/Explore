// import axios from 'axios'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { Button, Gap } from '../../components'
import BlogItem from '../../components/moleculs/BlogItem'
import { setDataBlog } from '../../config/redux/action/homeAction'
import './Home.scss'

const Home = () => {
    const [counter, setCount] = useState(1)
    const { dataBlog, page } = useSelector(state => state.homeReducer) // Destructuring

    const disPatch = useDispatch()

    useEffect(() => {
        disPatch(setDataBlog(counter))
    }, [counter, disPatch])

    const navigate = useNavigate();

    const previous = () => { // Function untuk previous
        setCount(counter <= 1 ? 1 : counter - 1)
        console.log(counter)
    }

    const next = () => { // Function untuk next
        setCount(counter === page.totalPage ? page.totalPage : counter + 1)
        console.log(counter)
    }
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
                        date={blog.createdAt}
                        _id={blog._id} />
                })}
            </div>
            <div className="pagination">
                <Button title='Previous' onClick={previous} />
                <Gap width={20} />
                <p className="text-page">{page.currentPage} / {page.totalPage}</p>
                <Gap width={20} />
                <Button title='Next' onClick={next} />
            </div>
            <Gap height={20} />
        </div>
    )
}

export default Home

import React from 'react'
import { useNavigate } from 'react-router'
import { RegisterBg } from '../../../assets'
import { Button, Gap } from '../../atoms'
import './BlogItem.scss'

const BlogItem = () => {
    const navigate = useNavigate();
    return (
        <div className="blog-item">
            <img className="image-thumb" src={RegisterBg} alt="post" />
            <div className="content-detail">
                <p className="title">Tittle Blog</p>
                <p className="author">Author - Date Post</p>
                <p className="body">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, ratione voluptate numquam eaque tempora magni impedit in explicabo nobis possimus odio ipsa sint, corporis mollitia autem assumenda, fugiat fugit ducimus?</p>
                <Gap height={20} />
                <Button title="View Detail" onClick={() => navigate('/detail-blog')} />
            </div>
        </div>
    )
}

export default BlogItem

import React from 'react'
import { RegisterBg } from '../../../assets'
import './BlogItem.scss'

const BlogItem = () => {
    return (
        <div className="blog-item">
            <img className="image-thumb" src={RegisterBg} alt="post" />
            <div className="content-detail">
                <p className="title">Tittle Blog</p>
                <p className="author">Author - Date Post</p>
                <p className="body">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, ratione voluptate numquam eaque tempora magni impedit in explicabo nobis possimus odio ipsa sint, corporis mollitia autem assumenda, fugiat fugit ducimus?</p>
            </div>
        </div>
    )
}

export default BlogItem

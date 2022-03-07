import React from 'react'
import { useNavigate } from 'react-router'
// import { RegisterBg } from '../../../assets'
import { Button, Gap } from '../../atoms'
import './BlogItem.scss'

const BlogItem = (props) => {
    const navigate = useNavigate();
    const { image, title, body, date, name, _id } = props // Destructuring props dimana props akan dikimkan ke BLogItem
    return (
        <div className="blog-item">
            <img className="image-thumb" src={image} alt="post" />
            <div className="content-detail">
                <p className="title">{title}</p>
                <p className="author">{name} - {date}</p>
                <p className="body">{body}</p>
                <Gap height={20} />
                <Button title="View Detail" onClick={() => navigate(`/detail-blog/${_id}`)} />
            </div>
        </div>
    )
}

export default BlogItem

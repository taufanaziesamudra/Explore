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
                <div className='title-wrapper'>
                    <p className="title">{title}</p>
                    <div className="edit-wrapper">
                        <p className="edit" onClick={() => navigate(`/create-blog/${_id}`)}>Edit</p> | <p className="delete" onClick={''}>Delete</p>
                    </div>
                </div>
                <p className="author">{name} - {date}</p>
                <p className="body">{body}</p>
                <Gap height={20} />
                <Button title="View Detail" onClick={() => navigate('/detail-blog')} />
            </div>
        </div>
    )
}

export default BlogItem

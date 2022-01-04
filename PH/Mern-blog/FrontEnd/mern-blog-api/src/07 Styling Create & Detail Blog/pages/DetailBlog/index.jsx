import React from 'react'
import { RegisterBg } from '../../assets'
import './DetailBlog.scss'
import { Gap } from '../../components'
const DetailBlog = () => {
    return (
        <div className='detail-blog-wrapper'>
            <Gap height={20} />
            <img className='img-cover' src={RegisterBg} alt='thumb' />
            <p className='blog-title'>Title Blog</p>
            <p className='blog-author'>Author - Date Post</p>
            <p className='blog-blody'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quasi cum, magnam doloribus nemo recusandae consequuntur vero libero, nisi et vel inventore? Eum eligendi, laboriosam modi eaque odit tempora dolor.</p>
        </div>
    )
}

export default DetailBlog

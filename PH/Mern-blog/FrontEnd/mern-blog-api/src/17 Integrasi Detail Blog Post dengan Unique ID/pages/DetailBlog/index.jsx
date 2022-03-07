import React, { useEffect, useState } from 'react'
import './DetailBlog.scss'
import { Gap, Link } from '../../components'
import { useLocation, useNavigate, useParams, withRouter } from 'react-router'
import axios from 'axios'
import { RegisterBg } from '../../assets'
// import { withRouter } from 'react-router'

const DetailBlog = ({ props }) => {
    const [data, setData] = useState({})
    useEffect(() => {
        const id = props.macth.params.id
        axios.get(`http://localhost:4000/v1/blog/post/${id}`)
            .then(res => {
                console.log('sukses,', res)
                setData(res.data.data)
            })
            .catch(err => {
                console.log('err', err)
            })
    }, [props])
    const navigate = useNavigate();
    if (data.author) {
        return (
            <div className='detail-blog-wrapper'>
                <Gap height={20} />
                <img className='img-cover' src={RegisterBg} />
                <p className='blog-title'>{props.title}</p>
                <p className='blog-author'>{data.author.name} - {data.createdAt}</p>
                <p className='blog-blody'>{props.body}</p>
                <Gap height={20} />
                <Link title='Kembali ke Home' onClick={() => navigate('/')} />
            </div>
        )
    }
    return <p>Loading Data . . .</p>
}

export default DetailBlog


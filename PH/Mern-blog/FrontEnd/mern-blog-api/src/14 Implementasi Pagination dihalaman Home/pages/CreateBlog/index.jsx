import React from 'react'
import { useNavigate } from 'react-router'
import { Button, Gap, Input, Link, TextArea, Upload } from '../../components'
import './CreateBlog.scss'

const CreateBlog = () => {
    const navigate = useNavigate();
    return (
        <div className='blog-post'>
            <Link title='kembali' onClick={() => navigate('/')} />
            <p className='title'>Create Blog</p>
            <Input label='Post Title' />
            <Upload />
            <TextArea />
            <Gap height={20} />
            <div className="button-action">
                <Button title='Save' />
            </div>
            <Gap height={10} />
        </div>
    )
}

export default CreateBlog

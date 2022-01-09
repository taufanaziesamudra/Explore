import React from 'react'
import { RegisterBg } from '../../../assets'
import './Upload.scss'

const Upload = ({ ...rest }) => {
    return (
        <div className='upload'>
            <img className='preview' src={RegisterBg} alt='preview' />
            <input type="file" {...rest} />
        </div>
    )
}

export default Upload

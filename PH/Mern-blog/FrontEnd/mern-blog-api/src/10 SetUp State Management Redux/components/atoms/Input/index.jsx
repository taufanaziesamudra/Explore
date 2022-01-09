import React from 'react'
import './input.scss'

// Menerima props lebel dan semua component input akan dimasukkan
const Input = ({ label, ...rest }) => {
    return (
        <div className="input-wrapper">
            <p className="label">{label}</p>
            <input className="input" {...rest}></input>
        </div>
    )
}

export default Input

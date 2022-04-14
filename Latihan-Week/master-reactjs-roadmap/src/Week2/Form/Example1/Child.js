import React from 'react'

const Child = (props) => {

    const handleChange = (event) => {
        props.onChange(event.target.value)
    }
    return (
        <div>
           <input value={props.value} onChange={handleChange} />
        </div>
    )
}

export default Child

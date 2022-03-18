import React from 'react'

const InputName = (props) => {
    return (
        <label>
            Input Name:
            <input type='text' value={props.name} onChange={props.changeName}></input>
        </label>
    )
}

export default InputName
import React from 'react'

const Input = (props) => {
    return (
        <div><input
            type='button' onClick={props.newName}
            value='Klik Untuk merubah'></input>
            <br />
            <label>Nama baru:</label>
            <input type='text' onBlur={(event) => props.ubahName(event.target.value)}></input>
            <br />
            <label>Umur baru:</label>
            <input type='number' onBlur={(event) => props.ubahAge(event.target.value)}></input>
        </div>
    )
}

export default Input
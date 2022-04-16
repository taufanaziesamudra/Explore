import React from 'react'

const Input = (props) => {
    return (
        <div>
            <input type='button' onClick={props.ubahName}
            value='Klik Untuk merubah nama'></input>
            <br />
            <label>Nama Baru:</label>
            {/* Menerima Method untuk merubah "name" melalui inputan  yang didapatkan dari event */}
            <span>
            <input type='text' onBlur={(event) => props.changeName(event.target.value)}></input>
            </span>
            <br />
            <span>
            <input type='number' onBlur={(event) => props.changeAge(event.target.value)}></input>
            </span>
        </div>
    )
}

export default Input

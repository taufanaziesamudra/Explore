import React from 'react'

const Formulir = ({ nama, harga, deskripsi, handleChange, handleSubmit }) => {
    return (
        <div>
            <label htmlFor="name">Nama Makanan</label>
            <input type="text" name="nama" value={nama} onChange={(event) => handleChange(event)} />
            <label htmlFor="harga">Harga</label>
            <input type='number' name='harga' value={harga} onChange={(event) => handleChange(event)} />
            <label htmlFor="deskripsi">Deskripsi</label>
            <input type="text" name="deskripsi" value={deskripsi} onChange={(event) => handleChange(event)} />
            <button onClick={handleSubmit}>Save</button>
        </div>
    )
}

export default Formulir

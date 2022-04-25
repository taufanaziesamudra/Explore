import React, { useState } from 'react'
import CreateEat from './CreateEat'
import DaftarMakanan from './DaftarMakanan'
import NavbarComponent from './NavbarComponent'

const Home = () => {
  const [state, setState] = useState({
    makanans: [],
    nama: '',
    deskripsi: '',
    harga: 0,
    id: ''
  })

  // TODO Untuk menerima perubahan
  const handleChange = (event) => {
    setState({
      [event.target.value]: event.target.value
    })
    console.log('Halo')
  }

  const handleSUbmit = (event) => {
    event.preventDefault()

    console.log('Data: ', state.makanans)
    // setState({
    // makanans: [
    // ...state.makanans,
    // {
    // id: state.makanans.length + 1,
    // nama: state.nama,
    // deskripsi: state.deskripsi,
    // harga: state.harga
    // }
    // ]
    // })
  }
  return (
    <div>
      <NavbarComponent />
      <div className='container mt-5'>
        <DaftarMakanan />
        <CreateEat nama={state.nama}
          deskripsi={state.deskripsi}
          harga={state.harga} id={state.id}
          handleChange={handleChange}
          handleSUbmit={handleSUbmit} />
      </div>
    </div>
  )
}

export default Home
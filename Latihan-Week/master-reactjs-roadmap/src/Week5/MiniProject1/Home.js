import React, { Component } from 'react'
import Create from './Create'
import ListEat from './ListEat'
import NavbarComponent from './NavbarComponent'
export class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      makanans: [],
      id: '',
      name: '',
      deskripsi: '',
      harga: 0
    }
  }

  //TODO Metgod untuk menginput form
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  //TODO Method untuk menambahkan makanans
  handleSubmit = (event) => {
    // eventPreventDefault untuk mereload
    event.preventDefault()

    // Jika state id kosong maka akan menambah data
    if (this.state.id === '') {
      this.setState({
        makanans: [
          ...this.state.makanans,
          {
            id: this.state.makanans.length + 1,
            name: this.state.name,
            deskripsi: this.state.deskripsi,
            harga: this.state.harga
          }
        ]
      })
      // console.log('Data:', this.state)
      //TODO Untuk meghilangkan data yang sudah tersubmit
      this.setState({
        id: '',
        name: '',
        deskripsi: '',
        harga: '',
      })
    } else {
      // Dan jika ada idnya maka akan mengedit data
      // Membuat variable baru diamana menerima value dari makanans
      const notEat = this.state.makanans
        // Memfilter dan melooping makanan yang yang akan diedit
        //! Jika makanan.id tidak sama dengan state id  maka akan melooping dan memfilter
        .filter((makanan) => makanan.id !== this.state.id)
        .map((filterEat) => {
          return filterEat
        })
      // setState untuk mengedit
      this.setState({
        makanans: [
          ...notEat,
          {
            id: this.state.makanans.length + 1,
            name: this.state.name,
            deskripsi: this.state.deskripsi,
            harga: this.state.harga
          }
        ]
      })
    }
  }

  //TODO Method untuk mengedit data
  editEat = (id) => {
    // Membuat variable baru dengan menerima value makanan yang sudah terisi
    const takeEat = this.state.makanans
      // Memfilter dan melooping makanan yang yang akan diedit
      .filter((makanan) => makanan.id === id)
      .map((filterEat) => {
        return filterEat
      })
    // Makanan yang sudah dipilih akan diedit
    this.setState({
      id: takeEat[0].id,
      name: takeEat[0].name,
      deskripsi: takeEat[0].deskripsi,
      harga: takeEat[0].harga
    })
    //! Setelah mengeditv harus mengubah handleSubmit
    // console.log('ID:', id)
  }

  //TODO Method untuk menghapus data makanan
  deleteEat = (id) => {
    // Membuat variable baru dengan menerima value makanan yang sudah terisi
    //! Membuat vairable untuk mengembalikan array dengan data yang sudah dihapus
    const newEat = this.state.makanans
      // Memfilter dan melooping makanan yang yang akan diedit
      .filter((makanan) => makanan.id !== id)
      .map((filterEat) => {
        return filterEat
      })
    this.setState({ makanans: newEat })
  }
  render() {
    return (
      <div>
        <NavbarComponent />
        <div className='container mt-5'>
          <ListEat
            makanans={this.state.makanans}
            editEat={this.editEat}
            deleteEat={this.deleteEat} />
          <Create
            {...this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit} />
        </div>
      </div>
    )
  }
}

export default Home
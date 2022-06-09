import React, { Component } from 'react'
import CreateMahasiswa from './CreateMahasiswa'
import ListMahasiswa from './ListMahasiswa'

class Mahasiswa extends Component {
  constructor(props) {
    super(props)

    this.state = {
      mahasiswa: [],
      id: '',
      name: '',
      address: '',
      phone: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
    // console.log('Data', state)
  }

  //TODO Method untuk menginput data
  handleSubmit = (event) => {
    //TODO Menggunakan method event.preventDefault dari js
    event.preventDefault()
    this.setState({
      //! Ambil data mahasiswa lalu yang berupa array kosong
      //! lalu isi data tersebut dalam object dimanana ada id, name, address, dan phone
      //! dan tambahakan property length + 1 untuk menabahkan suatu object kedalam array
      mahasiswa: [...this.state.mahasiswa,
      {
        id: this.state.length + 1,
        name: this.state.name,
        address: this.state.address,
        phone: this.state.phone
      }
      ]
    })
    //TODO Method menhapus data setelah diinput
    this.setState({
      id: '',
      name: '',
      address: '',
      phone: ''
    })
    // console.log('Data: ', this.state)
  }
  render() {
    return (
      <div>
        <ListMahasiswa mahasiswa={this.state.mahasiswa} />
        <CreateMahasiswa
          {...this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}
export default Mahasiswa
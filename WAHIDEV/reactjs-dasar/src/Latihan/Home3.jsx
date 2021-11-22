import React, { Component } from 'react'
import Formulir from './Formulir'
import Tabel from './Tabel'

export class Home3 extends Component {
    state = {
        makanan: [],
        nama: '',
        harga: 0,
        deskripsi: '',
        id: ""
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({
            makanan: [
                ...this.state.makanan,
                {
                    id: this.state.makanan.length + 1,
                    nama: this.state.nama,
                    harga: this.state.harga,
                    deskripsi: this.state.deskripsi
                }
            ]
        })
        this.setState({
            nama: '',
            harga: 0,
            deskripsi: '',
            id: ""
        })
    }
    render() {
        return (
            <div>
                <Formulir {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit}></Formulir>

                <Tabel makanan={this.state.makanan} />
            </div>
        )
    }
}

export default Home3

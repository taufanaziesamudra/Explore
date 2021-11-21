import React, { Component } from 'react'
import Navbar from './NavbarComponent'
import Table from './Tabel'
import Formulir from './Formulir'

export class Crud extends Component {
    constructor(props) {
        super(props)
        // Membuat state makanan yang berupa array dengan defauult kosong
        this.state = {
            makanans: [],
            nama: "",
            deskripsi: "",
            harga: 0,
            id: "",
        }
    }

    // Method untuk mengisi Formulir
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    // Method untuk Mensubmit Formulir yang sudah terisi
    handleSubmit = (event) => {
        // Fungsi preventDefault untuk mereload
        event.preventDefault()

        // Jika state id kosong maka akan menambah data
        if (this.state.id === "") {
            // Untuk menambah makanan yang berupa array
            this.setState({
                makanans: [
                    ...this.state.makanans,
                    {
                        id: this.state.makanans.length + 1,
                        nama: this.state.nama,
                        deskripsi: this.state.deskripsi,
                        harga: this.state.harga
                    }
                ]
            })

            // Dan jika ada idnya maka akan mengedit data
        } else {
            const makananTidak = this.state.makanans
                .filter((makanan) => makanan.id !== this.state.id)
                .map((filterMakanan) => {
                    return filterMakanan
                })

            this.setState({
                makanans: [
                    ...makananTidak,
                    {
                        id: this.state.makanans.length + 1,
                        nama: this.state.nama,
                        deskripsi: this.state.deskripsi,
                        harga: this.state.harga
                    }
                ]
            })

        }
        // Untuk Menghilangkan data yang sudah tersubmit menjadi kosong kembali
        this.setState({
            nama: "",
            deskripsi: "",
            harga: 0,
            id: "",
        })
    }

    // Method untuk mengedit data
    editData = (id) => {
        // Membuat variable baru dengan meneria value makanan yang sudah terisi
        const makananPilih = this.state.makanans
            // Memfilter makanan dan melopping yang akan diedit dengan id
            .filter((makanan) => makanan.id === id)
            .map((filterMakanan) => {
                // Mereturn filter makakaan yang akan diedit
                return filterMakanan
            })
        // Makanan yang sudah yang sudah dipilih dan akan di edit
        this.setState({
            nama: makananPilih[0].nama,
            deskripsi: makananPilih[0].deskripsi,
            harga: makananPilih[0].harga,
            id: makananPilih[0].id
        })
    }

    //Method untuk menghapus data
    deleteData = (id) => {
        const makananBaru = this.state.makanans
            .filter((makanan) => makanan.id !== id)
            .map((filterMakanan) => {
                return filterMakanan
            })
        this.setState({
            makanans: makananBaru
        })
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className="container mt4">
                    {/* Menerima data yang sudah disubmit yang akam ditampilalkan di tabel */}
                    <Table makanans={this.state.makanans} editData={this.editData} deleteData={this.deleteData} />

                    {/* Mengexpor semua funsgi method yang akan diterima oleh Formulir */}
                    <Formulir {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
                </div>
            </div>
        )
    }
}
export default Crud

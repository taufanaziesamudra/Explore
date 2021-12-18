import React, { useState } from 'react'

const BookManagement = ({ bookList, store, update, remove }) => {
    const [inputBook, setInputBook] = useState()

    // function untuk menangani inputan
    const handleJudul = (e) => {
        setInputBook({ ...inputBook, judul: e.target.value })
    }

    // function untuk mensubmit data
    const submitAdd = (e) => {
        e.preventDefault()
        store(inputBook)
    }

    // variabel untuk menampilkan tambah buku dan mengedit buku
    const [form, setForm] = useState()

    // fuction untuk menampilkan tambah buku
    const showCreate = () => {
        setForm("create")
    }

    // function untuk mengedit data dimana paremeternya book
    const showEdit = (book) => {
        setInputBook(book)
        setForm("edit")
    }

    // function untuk mensubmit perubahan pada buku
    const submitChange = (e) => {
        e.preventDefault()
        update(inputBook)
        setForm("")
    }

    // function untuk menghapus data
    const deleteBook = (book) => {
        remove(book)
    }

    return (
        <div className="container mt-3">
            <h1 className="text-center">BOOK MANAGEMENT</h1>

            {form === "create" && (
                <div id="formTambah">
                    <h5>CREATE BOOK</h5>
                    <hr />
                    <form className="form-row" onSubmit={submitAdd}>
                        <div className="col-3">
                            <input
                                type="text"
                                name="judul"
                                className="form-control mx-2"
                                placeholder="Judul"
                                onChange={handleJudul} />
                        </div>
                        <div className="col-3">
                            <input
                                type="text"
                                name="pengarang"
                                className="form-control mx-2"
                                placeholder="Pengarang" />
                        </div>
                        <div className="col-2">
                            <input
                                type="number"
                                name="harga"
                                className="form-control mx-2"
                                placeholder="Harga" />
                        </div>
                        <div className="col-2">
                            <input
                                type="number"
                                name="stock"
                                className="form-control mx-2"
                                placeholder="Stock" />
                        </div>
                        <div className="col-2">
                            <input
                                type="submit"
                                className="btn btn-primary ml-5"
                                value="simpan" />
                        </div>
                    </form>
                </div>
            )}


            {form === "edit" && (
                <div id="formUbah">
                    <h5>EDIT BOOK</h5>
                    <hr />
                    <form className="form-row" onSubmit={submitChange}>
                        <div className="col-3">
                            <input
                                type="text"
                                name="judul"
                                className="form-control mx-2"
                                placeholder="Judul"
                                onChange={handleJudul}
                                value={inputBook.judul} />
                        </div>
                        <div className="col-3">
                            <input
                                type="text"
                                name="pengarang"
                                className="form-control mx-2"
                                placeholder="Pengarang"
                                onChange={handleJudul}
                                value={inputBook.pengarang} />
                        </div>
                        <div className="col-2">
                            <input
                                type="number"
                                name="harga"
                                className="form-control mx-2"
                                placeholder="Harga"
                                onChange={handleJudul}
                                value={inputBook.harga} />
                        </div>
                        <div className="col-2">
                            <input
                                type="number"
                                name="stock"
                                className="form-control mx-2"
                                placeholder="Stock"
                                onChange={handleJudul}
                                value={inputBook.stock} />
                        </div>
                        <div className="col-2">
                            <input
                                type="submit"
                                className="btn btn-warning ml-2"
                                value="ubah" />
                        </div>
                    </form>
                </div>
            )}

            <div id="daftarBuku">
                <h2 className="mt-3">BOOK LIST</h2>
                <hr />
                <button className='btn bnt-primary m-2' onClick={showCreate}>CREATE BOOK</button>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Judul</th>
                            <th>Pengarang</th>
                            <th>Harga</th>
                            <th>Stock</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookList.map((book, index) => {
                            return (
                                <tr key={index}>
                                    <td> {index + 1} </td>
                                    <td> {book.judul} </td>
                                    <td> {book.pengarang} </td>
                                    <td> {book.harga} </td>
                                    <td> {book.stock} </td>
                                    <td>
                                        <button className="btn btn-info mr-3" onClick={() => showEdit(book)}>Edit</button>
                                        <button className="btn btn-danger" onClick={() => deleteBook(book)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default BookManagement

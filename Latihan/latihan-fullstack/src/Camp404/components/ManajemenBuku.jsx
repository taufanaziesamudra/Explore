import React, { useState } from 'react'

const ManajemenBuku = ({ bookList, store, update, remove }) => {
    const [inputBook, setInputBook] = useState()
    function handleJudul(event) {
        setInputBook({ ...inputBook, judul: event.target.value })
    }

    function submitAdd(event) {
        event.preventDefault()
        store(inputBook)
    }

    const [form, setForm] = useState()

    function showCreate() {
        setForm("create")
    }

    function showEdit(book) {
        setInputBook(book)

        setForm("edit")
    }

    function submitChange(event) {
        event.preventDefault()
        update(inputBook)
        setForm("")
    }

    function deleteBook(book) {
        remove(book)
    }
    // console.log(bookList)
    return (
        <div className="container mt-3">
            <h1 className="text-center">Manajemen Buku</h1>

            {form === "create" && (
                <div id="formTambah">
                    <h5>Tambah Buku</h5>
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
                    <h5>Ubah Buku</h5>
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
                <h2 className="mt-3">Daftar Buku</h2>
                <hr />
                <button className='btn bnt-primary m-2' onClick={showCreate}>Tambah Buku</button>
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

export default ManajemenBuku

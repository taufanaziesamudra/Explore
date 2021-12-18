import React from 'react'

const Beranda = ({ bookList }) => {
    return (
        <div className="container mt-3 w-75">
            <h1 className="text-center">Welcome to BOOK STORE!</h1>

            <div id="katalogBuku" className="mt-5">
                <h2 className="text-center">BOOK CATALOG</h2>
                <hr />
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Judul</th>
                            <th>Pengarang</th>
                            <th>Harga</th>
                            <th>Stock</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookList.map((book, index) => {
                            return (
                                <tr key={index}>
                                    <td> {index + 1}</td>
                                    <td> {book.judul} </td>
                                    <td> {book.pengarang} </td>
                                    <td> {book.harga} </td>
                                    <td> {book.stock} </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div >
    )
}

export default Beranda

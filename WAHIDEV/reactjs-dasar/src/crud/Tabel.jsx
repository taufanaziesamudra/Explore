import React from 'react'
import { Table } from 'react-bootstrap'

const Tabel = ({ makanans, editData, deleteData }) => {
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Nama Makanan</th>
                        <th>Deskripsi</th>
                        <th>Harga</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Untuk memanngil makanans yang sudah disubmit dengan dimapping */}
                    {makanans.map((makanan, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{makanan.nama}</td>
                                <td>{makanan.deskripsi}</td>
                                <td>{makanan.harga}</td>
                                <td>
                                    {/* Button untuk mengedit data yang dikrimkan dari formulir */}
                                    <button className="btn btn-warning mr-3" onClick={() => editData(makanan.id)}>Edit</button>

                                    {/* Button untuk mengedit data yang dikrimkan dari formulir */}
                                    <button className="btn btn-danger" onClick={() => deleteData(makanan.id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}

                </tbody>
            </Table>
        </div>
    )
}

export default Tabel

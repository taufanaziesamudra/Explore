import React from 'react'
import { Table } from 'react-bootstrap'
const Tabel = ({ makanan }) => {
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Nama Makanan</th>
                        <th>Harga</th>
                        <th>Deskripsi</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        makanan.map((makanans, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{makanans.nama}</td>
                                    <td>{makanans.harga}</td>
                                    <td>{makanans.deskripsi}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default Tabel

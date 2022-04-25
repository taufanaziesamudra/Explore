import React from 'react'
import { Table } from 'react-bootstrap'

const DaftarMakanan = ({ makanans }) => {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>Daftar Makanan</th>
            <th>Deskripsi</th>
            <th>Harga</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>AYam</td>
            <td>Enak</td>
            <td>RP. 10000</td>
            <td>
              <button className="btn btn-warning me-4">Edit</button>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>

        </tbody>
      </Table>
    </div>
  )
}

export default DaftarMakanan
import React from 'react'
import { Table } from 'react-bootstrap'

const ListEat = ({ makanans, editEat, id }) => {
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
          {
            makanans.map((makanan, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{makanan.name}</td>
                  <td>{makanan.deskripsi}</td>
                  <td>RP. {makanan.harga}</td>
                  <td>
                    <button className="btn btn-warning me-4" onClick={() => editEat(makanan.id)}>Edit</button>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
    </div>
  )
}

export default ListEat
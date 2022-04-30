import React from 'react'
import { Table } from 'react-bootstrap'

const ListMahasiswa = ({ mahasiswa }) => {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>NO</th>
            <th>NAME</th>
            <th>ADDRESS</th>
            <th>PHONE</th>
          </tr>
        </thead>
        <tbody>
          {mahasiswa.map((studets, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{studets.name}</td>
                <td>{studets.address}</td>
                <td>{studets.phone}</td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </div>
  )
}

export default ListMahasiswa
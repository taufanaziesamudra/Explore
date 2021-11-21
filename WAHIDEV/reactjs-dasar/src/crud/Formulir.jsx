import React from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'

// Menerima props yang dikrimkan dari Crud
const Formulir = ({ nama, deskripsi, harga, handleChange, handleSubmit, id }) => {
    return (
        <div className="mt-5">
            <Row>
                <Col>
                    {/* Jika id ada maka edit data  */}
                    <h4>{id ? "Edit Data" : "Tambah Data"}</h4>
                    <hr />
                </Col>
            </Row>
            <Row>
                <Col>
                    {/* Form menerim,a method handleSubmit untuk memposting file yang sudah terisi (submit) */}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="nama">
                            <Form.Label>Nama Makanan</Form.Label>
                            <Form.Control
                                type="text"
                                name="nama"
                                // Menerima sebuah props (nama)
                                value={nama}
                                // Menerima method  handleChange untuk merubah nama
                                onChange={(event) => handleChange(event)} />
                        </Form.Group>
                        <Form.Group controlId="deskripsi">
                            <Form.Label>Deskripsi</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                name="deskripsi"
                                // Menerima sebuah props (deskripsi)
                                value={deskripsi}
                                // Menerima method  handleChange untuk merubah deskripsi
                                onChange={(event) => handleChange(event)} />
                        </Form.Group>
                        <Form.Group controlId="harga">
                            <Form.Label>Harga</Form.Label>
                            <Form.Control
                                type="number"
                                name="harga"
                                // Menerima sebuah props (harga)
                                value={harga}
                                // Menerima method  handleChange untuk merubah harga
                                onChange={(event) => handleChange(event)} />
                        </Form.Group>
                        <Button variant="primary" type="submit">Submit</Button>
                    </Form>
                </Col>
            </Row>
        </div>
    )
}

export default Formulir

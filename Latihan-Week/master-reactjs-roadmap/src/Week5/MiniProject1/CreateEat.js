import React from 'react'
import { Col, Form, Row, Button } from 'react-bootstrap'

const CreateEat = ({ nama, deskripsi, harga, handleChange, handleSubmit }) => {
  return (
    <div className='mt-5'>
      <Row>
        <Col>
          <h1>Tambah Makanan</h1>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Nama Makanan</Form.Label>
              <Form.Control
                type='text'
                name='nama'
                value={nama}
                onChange={(event) => handleChange(event)}></Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label>Deskripsi</Form.Label>
              <Form.Control
                as='textarea'
                rows={3}
                name='deskripsi'
                value={deskripsi}
                onChange={(event) => handleChange(event)}></Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label>Harga</Form.Label>
              <Form.Control
                type='number'
                name='harga'
                value={harga}
                onChange={(event) => handleChange(event)}></Form.Control>
            </Form.Group>
            <Button className='mt-3' variant="primary" type="submit">Submit</Button>
          </Form>
        </Col>
      </Row>
    </div >
  )
}

export default CreateEat
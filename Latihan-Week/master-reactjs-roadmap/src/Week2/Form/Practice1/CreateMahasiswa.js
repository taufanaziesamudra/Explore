import React from 'react'
import { Form } from 'react-bootstrap'

const CreateMahasiswa = ({ name, address, phone, handleChange, handleSubmit }) => {
  return (
    <div>
      <Form >
        <label htmlFor='name'>Nama Mahasiswa</label>
        <input type='text' name='name' value={name} onChange={(event) => handleChange(event)}></input>
        <label htmlFor='name'>Address</label>
        <input type='text' name='address' value={address} onChange={(event) => handleChange(event)}></input>
        <label htmlFor='name'>PHONE</label>
        <input type='number' name='phone' value={phone} onChange={(event) => handleChange(event)}></input>
        <button onClick={handleSubmit} type='submit'>SUBMIT</button>
      </Form>
    </div>
  )
}

export default CreateMahasiswa
import React, { useState } from 'react'
import { uid } from 'uid'
import List from './List'

const AppHome = () => {
  const [contact, setContact] = useState([
    //TODO state dinamis
    // { id: 1, name: 'Taufan', telp: '081280386544' },
    // { id: 2, name: 'Taufan', telp: '081280386544' }
  ])

  //TODO Membuat variabel untuk mengisi handleEdit diaman id null dan status false
  const [isUpdate, setISUpdate] = useState({ id: null, status: false })

  //TODO Membuat variabel untuk mengisi handleChange dimana datanya diisi dengan nam dan telp
  const [formData, setFormData] = useState({ name: '', telp: '', })

  const handleChange = (event) => {
    //TODO Membuat variabel data dengan mengisi dari value formData
    let data = { ...formData }
    //TODO Mengisi data
    data[event.target.name] = event.target.value
    setFormData(data)
  }

  // Method untuk mensubmit
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('ahalo')
    //TODO Validasi untuk inputan kosong
    // Jika name dan telp kosong maka value tidak akan meneriman inputan
    if (formData.name === '') {
      return false
    }
    if (formData.telp === '') {
      return false
    }

    //TODO Validai untuk mengedit
    if (isUpdate.status) {
      //TODO Membuat variable dari contact untuk
      let data = [...contact]
      data.forEach((contact) => {
        if (contact.id === isUpdate.id) {
          contact.name = formData.name
          contact.telp = formData.telp
        }
      })
    } else {
      //TODO Membuat variable dari contact untuk 
      let data = [...contact]
      data.push({ id: uid(), name: formData.name, telp: formData.telp })
      setContact([...data])
    }
    //TODO Setelah diupdate data akan kosong kembali
    setFormData({ name: '', telp: '' })
    //TODO 
    setISUpdate({ id: null, status: false })
  }

  //TODO Method untuk mengedit
  const handleEdit = (id) => {
    //TODO Membuat variable dari contact untuk
    let data = [...contact]
    //TODO diamana harus mencari id terlebih dengan find dan mecocokannya dengan ID
    let foundData = data.find((contact) => contact.id === id)
    setFormData({ name: foundData.name, telp: foundData.telp })
    setISUpdate({ id: id, status: true })
  }

  //TODO Method untuk mengedit
  const handleDelete = (id) => {
    let data = [...contact]
    //TODO diamana harus mencari id terlebih dengan filter dan mecocokannya dengan ID
    let filterData = data.filter((contact) => contact.id !== id)
    setContact(filterData)
  }

  return (
    <div>
      <h1 className='px-3 py-3'>My Contac List</h1>

      <form className='py-3 py-4'>
        <div className='form-group'>
          <label htmlFor=''>Name</label>
          <input
            type='text'
            className='form-control'
            name='name'
            onChange={handleChange}
            value={formData.name}></input>
        </div>
        <div className='form-group'>
          <label htmlFor=''>No.Telp</label>
          <input
            type='text'
            className='form-control'
            name='telp'
            onChange={handleChange}
            value={formData.telp}></input>
        </div>
        <button
          type='submit'
          className='btn btn-primary w-100 mt-3'
          onClick={handleSubmit}>Save</button>
      </form >
      <List data={contact} handleEdit={handleEdit} handleDelete={handleDelete} />
    </div >
  )
}

export default AppHome
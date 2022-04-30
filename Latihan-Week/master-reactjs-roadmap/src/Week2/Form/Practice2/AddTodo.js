import React, { useState } from 'react'

const AddTodo = (props) => {
  // console.log(props)
  const [text, setText] = useState('')
  const handleAddTodo = () => {
    props.onAdd(text)
    setText('')
  }
  // console.log(text)
  return (
    <div>
      <input
        type='text'
        placeholder='Masukkan todo'
        value={text}
        onChange={(event) => setText(event.target.value)} />
      <button type='submit' onClick={(text) => handleAddTodo(text)}>Add Todo</button>
    </div>
  )
}

export default AddTodo
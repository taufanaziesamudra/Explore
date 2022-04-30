import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos }) => {
  return (
    <div>
      {/* Mereload data yang dikirim dari Apps dan data 
      tersebut akan dibaca di Todo dengan value data */}
      {todos.map((value, key) => (
        <Todo key={key} data={value} />
      ))}
    </div>
  )
}

export default TodoList
import React, { useState } from 'react'
import TodoList from './TodoList'
import AddTodo from './AddTodo'

const Apps = () => {
  const [todos, setTodos] = useState([''
    // { id: 1, text: 'Sleep', completed: true },
    // { id: 2, text: 'Eat', completed: false },
    // { id: 3, text: 'Ngoding', completed: false }
  ])

  const onAddTodo = (text) => {
    todos.push({
      id: todos.length + 1,
      text: text,
      completed: false
    })
    setTodos([...todos])
  }
  return (
    <div>
      {/* Data dilempar ke todolist */}
      <TodoList todos={todos} />

      <AddTodo onAdd={(text) => onAddTodo(text)} />
    </div>

  )
}

export default Apps
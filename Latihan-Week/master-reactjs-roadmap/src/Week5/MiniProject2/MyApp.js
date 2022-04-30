import React, { Fragment, useState } from 'react'
import { Form, Row, Col, Button, } from 'react-bootstrap'
import AddActivity from './AddActivity'
import Header from './Header'
import ListActivity from './ListActivity'


const MyApp = () => {
  const [todos, setTodos] = useState([
    { id: 1, jam: 'Sleep', aktifitas: '18:00 - 19:00' },
    { id: 2, jam: 'Eat', aktifitas: '18:00 - 19:00' },
    { id: 3, jam: 'Ngoding', aktifitas: '18:00 - 19:00' }
  ])

  const addTodo = (jam) => {
    // event.preventDefault()
    todos.push({
      id: todos.length + 1,
      jam: jam,
    })
    setTodos(...todos)
  }
  return (
    <Fragment>
      <Header />
      <hr />
      <AddActivity />
      <ListActivity todos={todos} />
    </Fragment >
  )
}

export default MyApp
import React, { Component } from 'react'

class MyTodoList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userInput: '',
      todoList: []
    }
  }

  handleChange = (event) => {
    this.setState({
      userInput: event.target.value
    })
  }

  handleSubmit = () => {
    const itemArray = this.state.userInput.split(',')
    this.setState({
      todoList: itemArray
    })
  }
  render() {
    const items = this.state.todoList.map(i =>
      <li>{i}</li>)
    return (
      <div>
        <textarea
          type=''
          onChange={this.handleChange}
          placeholder='Input SparePart'></textarea>
        <button onClick={this.handleSubmit}>Create SparePart</button>
        <h1>MyTodoList:</h1>
        <ul>{items}</ul>
      </div>
    )
  }
}

export default MyTodoList
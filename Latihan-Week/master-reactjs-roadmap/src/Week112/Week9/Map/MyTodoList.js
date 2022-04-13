// import React, { Component } from 'react'

// const textAreaStyles = {
//     width: 235,
//     margin: 5
// };
// export class MyTodoList extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             userInput: '',
//             toDoList: []
//         }
//         this.handleSubmit = this.handleSubmit.bind(this)
//         this.handleChange = this.handleChange.bind(this)
//     }

//     handleSubmit() {
//         const itemArray = this.state.userInput.split(',')
//         this.setState({
//             toDoList: itemArray
//         })
//     }

//     handleChange(event) {
//         this.setState({
//             userInput: event.target.value
//         })
//     }
//     render() {
//         const items = this.state.toDoList.map(i =>
//             <li>{i}</li>)
//         return (
//             <div>
//                 <textarea
//                     type='text'
//                     style={textAreaStyles}
//                     onChange={this.handleChange}
//                     placeholder="Input Spare Part"></textarea>
//                 <br />
//                 <button onClick={this.handleSubmit}>Create List</button>
//                 <h1>MyTodoList:</h1>
//                 <ul>
//                     {items}
//                 </ul>
//             </div>
//         )
//     }
// }

// export default MyTodoList


import React, { useState } from 'react'

const MyTodoList = () => {
    const textAreaStyles = {
        width: 235,
        margin: 5
    }

    const [todo, setTodo] = useState({
        userInput: '',
        todoList: []
    })

    const handleSubmit = () => {
        // Membuat variabel dengan nama itemArray
        // dimana berisi data yang akan dimasukan ke userInput
        const itemArray = todo.userInput.split('')
        setTodo({
            todoList: itemArray
        })
    }

    const handleChange = (event) => {
        setTodo({
            userInput: event.target.value
        })
    }

    const items = todo.todoList.map((i =>
        <li key={i}>{i}</li>))
    return (
        <div>
            <textarea
                type="text"
                style={textAreaStyles}
                onChange={handleChange}
                placeholder="Input Spare Part"></textarea>
            <button onClick={handleSubmit}>Create Spare Part</button>
            <br />
            <h1>MyTodoList:</h1>
            <ul>
                {items}
            </ul>
        </div>
    )
}

export default MyTodoList
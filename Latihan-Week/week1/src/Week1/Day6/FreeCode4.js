// import React, { Component } from 'react'

// export class FreeCode4 extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             input: '',
//             submit: ''
//         }
//         this.handleChange = this.handleChange.bind(this)
//         this.handleSubmit = this.handleSubmit.bind(this)
//     }

//     handleChange(event) {
//         this.setState({
//             input: event.target.value
//         })
//     }

//     handleSubmit(event) {
//         event.preventDefault()
//         this.setState({
//             submit: this.state.input
//         });
//     }
//     render() {
//         return (
//             <div>
//                 <form onSubmit={this.handleSubmit}>
//                     <input value={this.state.input} onChange={this.handleChange}></input>
//                     <button type='submit'>Submit!</button>
//                 </form>
//                 <h2>{this.state.submit}</h2>
//             </div>
//         )
//     }
// }

// export default FreeCode4

import React, { useState } from 'react'

const FreeCode4 = () => {
    const [state, setState] = useState({
        todos: []
    })

    const handleChange = (event) => {
        const jam = jam.value
        const aktifitas = aktifitas.value
        state.todos.push({ jam, aktifitas })
        setState({
            todos: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setState({
            todos: state.todos
        })
    }
    return (
        <div>
            <form >
                <input type='text' value={state.jam} onChange={handleChange}></input>
                <input type='text' value={state.aktifitas} onChange={handleChange}></input>
                <button type='submit' onClick={handleSubmit}>Submit!</button>
            </form>
            <h1>{state.submit}</h1>
        </div>
    )
}

export default FreeCode4
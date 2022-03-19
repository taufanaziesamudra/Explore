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
        input: '',
        submit: ''
    })

    const handleChange = (event) => {
        setState({
            input: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setState({
            submit: state.input
        })
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={state.input} onChange={handleChange}></input>
                <button type='submit'>Submit!</button>
            </form>
            <h1>{state.submit}</h1>
        </div>
    )
}

export default FreeCode4
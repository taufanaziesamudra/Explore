// import React, { Component } from 'react'

// export class FreeCode3 extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             input: ''
//         }
//         this.handleChange = this.handleChange.bind(this)
//     }

//     handleChange(event) {
//         this.setState({
//             input: event.target.value
//         })
//     }
//     render() {
//         return (
//             <div>
//                 <input value={this.state.input} onChange={this.handleChange}></input>
//                 <h1>{this.state.input}</h1>
//             </div>
//         )
//     }
// }

// export default FreeCode3


import React, { useState } from 'react'

const FreeCode3 = () => {
    const [state, setState] = useState({
        input: ''
    })

    const handleChange = (event) => {
        setState({
            input: event.target.value
        })
    }
    return (
        <div>
            <input value={state.input} onChange={handleChange}></input>
            <p>{state.input}</p>
        </div>
    )
}

export default FreeCode3
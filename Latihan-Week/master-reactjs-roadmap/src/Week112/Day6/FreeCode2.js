// import React, { Component } from 'react'

// export class FreeCode2 extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             count: 0
//         }
//         this.increment = this.increment.bind(this)
//         this.decrement = this.decrement.bind(this)
//         this.reset = this.reset.bind(this)
//     }

//     increment() {
//         this.setState({
//             count: this.state.count + 1
//         })
//     }

//     decrement() {
//         if (this.state.count > 0) {
//             this.setState({
//                 count: this.state.count - 1
//             })

//         }
//     }

//     reset() {
//         this.setState({
//             count: 0
//         })
//     }
//     render() {
//         return (
//             <div>
//                 <button onClick={this.increment}>increment</button>
//                 <button onClick={this.decrement}>decrement</button>
//                 <button onClick={this.reset}>reset</button>
//                 <br />
//                 <h1>{this.state.count}</h1>
//             </div>
//         )
//     }
// }

// export default FreeCode2

import React, { useState } from 'react'

const FreeCode2 = () => {
    const [state, setState] = useState({
        count: 0
    })

    const reset = () => {
        setState({
            count: 0
        })
    }

    const Increment = () => {
        setState({
            ...state,
            count: state.count + 1
        })
    }

    const Decrement = () => {
        if (state.count > 0) {
            setState({
                ...state,
                count: state.count - 1
            })

        }
    }
    return (
        <div>
            <button onClick={Increment} >Tambah</button>
            <button onClick={Decrement}>Kurang</button>
            <button onClick={reset}>Reset</button>
            <br />
            <h1>{state.count}</h1>
        </div>
    )
}

export default FreeCode2
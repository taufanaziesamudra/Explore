import React, { Component, useState } from 'react'
import './Hooks.css'

// export class Hooks extends Component {
//     state = {
//         count: 0
//     }

//     handleUpdate = () => {
//         this.setState({
//             count: this.state.count + 1
//         })
//     }
//     render() {
//         return (
//             <div className="p-hooks">
//                 <p >Ini adalah nilai saya saat ini : {this.state.count} </p>
//                 <button onClick={this.handleUpdate}>Update Nilai</button>
//             </div>
//         )
//     }
// }


const Hooks = () => {
    // Init state
    const [count, setCount] = useState(0)

    return (
        <div className="p-hooks">
            <p >Ini adalah nilai saya saat ini : {count} </p>
            <button onClick={() => setCount(count + 1)}>Update Nilai</button>
        </div>
    )
}

export default Hooks

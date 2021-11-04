import React, { Component, useEffect, useState } from 'react'
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

//     // Merubah title menjadi state
//     componentDidMount() {
//         document.title = `Title Change: ${this.state.count}`
//     }

//     // Merubah title setelah ditekan tombol update
//     componentDidUpdate() {
//         document.title = `Title Change: ${this.state.count}`
//     }

//     // Mengembalikan title menjadi  hello -world
//     componentWillUnmount() {
//         document.title = "Hello World"
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

    useEffect(() => {
        document.title = `Title Change: ${count}`
        return () => {
            // Memanggil LifeCycle WillUnmount
            document.title = "Hello World"
        }
    })
    return (
        <div className="p-hooks">
            <p >Ini adalah nilai saya saat ini : {count} </p>
            <button onClick={() => setCount(count + 1)}>Update Nilai</button>
        </div>
    )
}

export default Hooks

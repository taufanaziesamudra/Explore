// StateFull Component
// import React, { Component } from 'react'
// import Data from './Data'
// import Input from './Input'
// export class Home4 extends Component {
//     constructor(props) {
//         super(props)
//         // Initialisasi state
//         this.state = {
//             name: 'Taufan Ajie Samudro',
//             age: 20,
//         }
//     }
//     // Method untuk merubah "name" dan "age"
//     newName = () => {
//         this.setState({
//             name: 'Budi',
//             age: 18
//         })
//     }
//     // Method untuk merubah "name" melalui inputan dimana menerima value
//     ubahName = (namaBaru) => {
//         this.setState({
//             name: namaBaru
//         })
//     }
//     // Method untuk merubah "age" melalui inputan dimana menerima value
//     ubahAge = (newAge) => {
//         this.setState({
//             age: parseInt(newAge)
//         })
//     }
//     render() {
//         return (
//             <div>
//                 <h1>WELCOME REACTJS</h1>
//                 {/* Mengirim props "name" dan "age"  yang akan diterima oleh data */}
//                 <Data name={this.state.name} age={this.state.age} />

//                 {/* Mengirim method "newName", "ubahName" dan "ubahAge" yang akan diterima oleh input */}
//                 <Input
//                     newName={this.newName}
//                     ubahName={this.ubahName}
//                     ubahAge={this.ubahAge} />
//             </div >
//         )
//     }
// }

// export default Home4





// Functional Component
import React, { useState } from 'react'
import Data from './Data'
import Input from './Input'

const Home4 = () => {
    // Initialisasi state
    const [state, setState] = useState({
        name: "Taufan Ajie Samduro",
        age: 30,
    })
    // Method untuk merubah "name" dan "age"
    const newName = () => {
        setState({
            ...state,
            name: 'Koplar', age: 20
        })
    }
    // Method untuk merubah "name" melalui inputan dimana menerima value
    const ubahName = (namaBaru) => {
        setState({
            ...state,
            name: namaBaru
        })
    }
    // Method untuk merubah "age" melalui inputan dimana menerima value
    const ubahAge = (newAge) => {
        setState({
            ...state,
            age: parseInt(newAge)
        })
    }
    return (
        <div>
            <h1>WELCOME REACTJS</h1>
            {/* Mengirim props "name" dan "age" */}
            <Data name={state.name} age={state.age} />

            {/* Mengirim method "newName", "ubahName" dan "ubahAge" yang akan diterima oleh input */}
            <Input newName={newName} ubahName={ubahName} ubahAge={ubahAge} />
        </div>
    )
}

export default Home4
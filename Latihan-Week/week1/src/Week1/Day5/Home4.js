// import React, { Component } from 'react'
// import Data from './Data'
// import Input from './Input'

// export class Home4 extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             name: 'Taufan Ajie Samudro',
//             age: 20,
//         }
//     }

//     newName = () => {
//         this.setState({
//             name: 'Budi',
//             umur: 18
//         })
//     }

//     ubahName = (namaBaru) => {
//         this.setState({
//             name: namaBaru
//         })
//     }

//     ubahAge = (newAge) => {
//         this.setState({
//             age: parseInt(newAge)
//         })
//     }
//     render() {
//         return (
//             <div>
//                 <h1>WELCOME REACTJS</h1>
//                 <Data name={this.state.name} age={this.state.age} />
//                 <Input
//                     newName={this.newName}
//                     ubahName={this.ubahName}
//                     ubahAge={this.ubahAge} />
//             </div >
//         )
//     }
// }

// export default Home4


import React, { useState } from 'react'
import Data from './Data'
import Input from './Input'

const Home4 = () => {
    const [state, setState] = useState({
        name: "Taufan Ajie Samduro",
        age: 30,
    })

    const newName = () => {
        setState({
            ...state,
            name: 'Koplar', age: 20
        })
    }

    const ubahName = (namaBaru) => {
        setState({
            ...state,
            name: namaBaru
        })
    }

    const ubahAge = (newAge) => {
        setState({
            ...state,
            age: parseInt(newAge)
        })
    }
    return (
        <div>
            <h1>WELCOME REACTJS</h1>
            <Data name={state.name} age={state.age} />
            <Input newName={newName} ubahName={ubahName} ubahAge={ubahAge} />
        </div>
    )
}

export default Home4
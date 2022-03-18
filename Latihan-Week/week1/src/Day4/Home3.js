// import React, { Component } from 'react'
// import Greeting from './Greeting'
// import Information from './Information'

// export class Home3 extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             data: 'Halo World',
//             greeting: 'Selamat datang di React JS',
//             isInformation: false,
//             person: {
//                 name: 'Taufan Ajie Samduro'
//             }
//         }
//     }

//     changeText = () => {
//         this.setState({
//             data: 'Selamat Datang'
//         })
//     }

//     showInformation = () => {
//         this.setState({
//             isInformation: !this.state.isInformation
//         })
//     }
//     render() {
//         // Membuat variabel state
//         const { data, isInformation, person, greeting } = this.state
//         return (
//             <div>
//                 <h1>State diclass Component: {this.state.data}</h1>
//                 <hr />
//                 <Greeting kirim={this.state.greeting} changeText={this.changeText} />
//                 <hr />
//                 <Information isInformation={isInformation} showInformation={this.showInformation} />
//             </div>
//         )
//     }
// }

// export default Home3


import React, { useState } from 'react'
import Greeting from './Greeting'
import Information from './Information'

const Home3 = () => {
    const [state, setState] = useState({
        data: 'Halo World',
        greeting: 'Selamat datang di React JS',
        isInformation: false,
        person: {
            name: 'Taufan Ajie Samduro'
        }
    })

    const changeText = () => {
        setState({
            ...state,
            data: 'Halllllll'
        })
    }

    const showInformation = () => {
        setState({
            ...state,
            isInformation: !state.isInformation
        })
    }


    return (
        <div>
            <h1>Ini dari state: {state.data}</h1>

            <Greeting kirim={state.greeting} changeText={changeText} />

            <Information isInformation={state.isInformation} showInformation={showInformation} />
        </div>
    )
}

export default Home3
// StateFull Component
// import React, { Component } from 'react'
// import './HelloWorld.css';

// export default class HelloWorld extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             salam: 'Haloo',
//         }
//     }

//     // Method untuk merubah salam
//     salamkan = () => {
//         this.setState({ salam: 'Salam untukmu!' })
//     }
//     render() {
//         return (
//             <div className='warna'>
//                 {/* Menerima state "salam", menerima props "nama" dari Home dan menerima props "belakang" dari Home  */}
//                 {this.state.salam} {this.props.nama} {this.props.belakang}

//                 {/* Menerima Method "salamkan" dengan event onClick */}
//                 <button onClick={this.salamkan}>Salamkan</button>
//             </div>
//         )
//     }
// }





// Functional Component
import React, { useState } from 'react'
import './HelloWorld.css';

const HelloWorld = (props) => {
    // Menginisialisai state
    const [state, setState] = useState({
        Halo: 'Haloooooo',
    })

    // Metod untuk merubah salam
    // const salamkan = () => {
    //     setState({
    //         Halo: 'Salam semua'
    //     })
    // }

    return (
        <div className='warna'>
            {/* Menerima props "nama" dari Home, menerima props dari "belakang" dan menerima state */}
            {props.nama} {props.belakang} {state.Halo}

            {/* Menerima method dari salamkan (tapi tidak digunakan) hanya meneriam setState untuk merubah Halo*/}
            <button onClick={() => setState({ Halo: 'ayoooo' })}>Rubah</button>
        </div>
    )
}

export default HelloWorld
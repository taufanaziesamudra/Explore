// import React, { Component } from 'react'
// import './HelloWorld.css';

// export default class HelloWorld extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             salam: 'Haloo',
//         }
//     }

//     salamkan = () => {
//         this.setState({ salam: 'Salam untukmu!' })
//     }
//     render() {
//         return (
//             <div className='warna'>
//                 {this.state.salam} {this.props.nama} {this.props.belakang}
//                 <button onClick={this.salamkan}>Salamkan</button>
//             </div>
//         )
//     }
// }


import React, { useState } from 'react'
import './HelloWorld.css';

const HelloWorld = (props) => {
    const [state, setState] = useState({
        Halo: 'Haloooooo',
    })

    // const salamkan = () => {
    //     setState({
    //         Halo: 'Salam semua'
    //     })
    // }

    return (
        <div className='warna'>
            {props.nama} {props.belakang} {state.Halo}
            <button onClick={() => setState({ Halo: 'ayoooo' })}>Rubah</button>
        </div>
    )
}

export default HelloWorld
// import React, { Component } from 'react'

// export class Greeting extends Component {
//     state = {
//         Halo: 'Haloo semua',
//     }
//     render() {
//         return (
//             <div>
//                 {/* <h2>props: {this.props.kirim}</h2> */}
//                 <hr />

//                 <h3>State functionanal {this.state.Halo}</h3>
//                 <button onClick={() => this.setState({ Halo: 'Berubah' })}>Ganti</button>
//                 {/* Untuk merubah parent */}
//                 <button onClick={() => this.props.changeText()}>Ganti  ke home</button>
//             </div>
//         )
//     }
// }

// export default Greeting


import React, { useState } from 'react'

const Greeting = (props) => {
    const [state, setState] = useState({
        Halo: 'Halo brooo',
    })

    return (
        <div>
            <h1>{props.kirim}</h1>
            <hr />
            <h3>Ini dari state{state.Halo}</h3>
            <button onClick={() => setState({ Halo: 'berubah' })}>Rubah</button>

            <button onClick={() => props.changeText()}>gabtiiii</button>
        </div>
    )
}

export default Greeting
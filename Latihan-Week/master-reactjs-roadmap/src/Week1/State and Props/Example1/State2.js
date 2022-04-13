// // StateFull Component // StateFull Component atau Class Component
// import React, { Component } from 'react'

// export class State2 extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             syHai: 'Halo'
//         }
//     }
//     render() {
//         return (
//             <div>
//                 <h1>{this.state.syHai} Namaku adalah : {this.props.namaDepan} {this.props.namaBelakang} </h1>
//             </div>
//         )
//     }
// }

// export default State2


// Functional Component atau JSX
import React, { useState } from 'react'

const State2 = (props) => {
    const [state, setState] = useState({
        syHai: 'Halo'
    })
    return (
        <div>
            <h1>{state.syHai} Namaku adalah : {props.namaDepan} {props.namaBelakang}</h1>
        </div>
    )
}

export default State2
// StateFll Component
// import React, { Component } from 'react'

// export class Operan extends Component {
//     render() {
//         return (
//             <div>
//                 <h3>Operan yang menjadi props {this.props.makan}</h3>
//                 <button onClick={() => this.props.handleChange('akar')}>Ganti</button>
//             </div>
//         )
//     }
// }

// export default Operan





// Functional Component
import React from 'react'

const Operan = (props) => {
    return (
        <div>
            <h2>Operan State yang akan menggati: {props.makan}</h2>
            <button onClick={() => props.handleGanti('soto')}>Ganti</button>
        </div>
    )
}

export default Operan

// import React, { Component } from 'react'
// import Operan from './Operan'

// export class StateProps extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             makanan: 'Mie Ayam',
//         }
//     }

//     handleChange = (berubah) => {
//         this.setState({
//             makanan: berubah
//         })
//     }
//     render() {
//         return (
//             <div>
//                 <h2>tidak bisa {this.state.makanan}</h2>
//                 <button onClick={() => this.handleChange('Mernu top')}>Menu</button>

//                 <Operan makan='bakso' handleChange={this.handleChange} />
//             </div>
//         )
//     }
// }

// export default StateProps


import React, { useState } from 'react'
import Operan from './Operan'

const StateProps = () => {
    const [state, setState] = useState({
        makanan: 'Bakso',
    })

    const handleGanti = (makan_baru) => {
        setState({
            makanan: makan_baru
        })
    }
    return (
        <div>
            <h1>{state.makanan}</h1>
            <button onClick={() => handleGanti('pangsit')}>Ganti Makanan</button>
            <Operan makan={state.makanan} handleGanti={handleGanti} />
        </div>
    )
}

export default StateProps


// import React, { Component } from 'react'

// export class FreeCode extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             name: 'Taufan AS'
//         }
//         this.handleClick = this.handleClick.bind(this)
//     }

//     handleClick = () => {
//         this.setState({
//             name: 'Reack Rocks'
//         })
//     }
//     render() {
//         return (
//             <div>
//                 <button onClick={this.handleClick}>Click Me</button>
//                 <h1>{this.state.name}</h1>
//             </div>
//         )
//     }
// }

// export default FreeCode

import React, { useState } from 'react'

const FreeCode = () => {
    const [state, setState] = useState({
        name: 'Inputan'
    })

    const handleClick = () => {
        setState({
            name: 'Reaclk Rock!'
        })
    }
    return (
        <div>
            <p>{state.name}</p>
            <button onClick={handleClick}>Klik</button>
        </div>
    )
}

export default FreeCode
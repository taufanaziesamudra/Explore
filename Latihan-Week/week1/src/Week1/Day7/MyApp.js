// import React, { Component } from 'react'
// import Navbar from './Navbar'

// export class MyApp extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             name: 'taufan'
//         }
//     }
//     render() {
//         return (
//             <div>
//                 <Navbar name={this.state.name} />
//             </div>
//         )
//     }
// }

// export default MyApp


import React, { useState } from 'react'
import Navbar from './Navbar'

const MyApp = () => {
    const [state, setState] = useState({
        name: 'TopaND'
    })
    return (
        <div>
            <Navbar name={state.name} />
        </div>
    )
}

export default MyApp
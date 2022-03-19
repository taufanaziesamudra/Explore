// import React, { Component } from 'react'

// export class MyCompenent extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             activeUsers: null
//         }
//     }

//     componentDidMount() {
//         setTimeout(() => {
//             this.setState({
//                 activeUsers: 1273
//             });
//         }, 2500);
//     }
//     render() {
//         return (
//             <div>
//                 <h1>Atifitas User: {this.state.activeUsers}</h1>
//             </div>
//         )
//     }
// }

// export default MyCompenent

import React, { useEffect, useState } from 'react'

const MyCompenent = () => {
    const [state, setState] = useState({
        activeUser: null
    })


    useEffect(() => {
        setTimeout(() => {
            setState({
                activeUser: 123
            })
        }, 3000)
    })
    return (
        <div>
            <h1>Aktifitas User: {state.activeUser}</h1>
        </div>
    )
}

export default MyCompenent
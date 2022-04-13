// import React, { Component } from 'react'

// export class Navbar extends Component {
//     constructor(props) {
//         super(props)
//     }
//     render() {
//         return (
//             <div>
//                 <h1>Heloo, my name is: {this.props.name}</h1>
//             </div>
//         )
//     }
// }

// export default Navbar


import React from 'react'

const Navbar = (props) => {
    return (
        <div>
            <h2>Hallo Babang: {props.name}</h2>
        </div>
    )
}

export default Navbar
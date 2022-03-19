// import React, { Component } from 'react'

// export class GetInput extends Component {
//     constructor(props) {
//         super(props)
//     }
//     render() {
//         return (
//             <div>
//                 <h3>Get Input:</h3>
//                 <input value={this.props.input} onChange={this.props.handleChange} />
//             </div>
//         )
//     }
// }

// export default GetInput

import React from 'react'

const GetInput = (props) => {
    return (
        <div>
            <h3>Get Input:</h3>
            <input value={props.input} onChange={props.handleChange} />
        </div>
    )
}

export default GetInput
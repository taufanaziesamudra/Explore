// import React, { Component } from 'react'

// export class RenderInput extends Component {
//     constructor(props) {
//         super(props)
//     }
//     render() {
//         return (
//             <div>
//                 <h3>Input Render :</h3>
//                 <p>{this.props.input}</p>
//             </div>
//         )
//     }
// }

// export default RenderInput


import React from 'react'

const RenderInput = (props) => {
    return (
        <div>
            <h3>Render Input:</h3>
            <h1>{props.input}</h1>
        </div>
    )
}

export default RenderInput
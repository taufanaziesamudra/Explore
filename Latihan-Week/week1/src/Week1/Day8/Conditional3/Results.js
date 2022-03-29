// import React, { Component } from 'react'

// export class Results extends Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return (
//             <h1>
//                 {this.props.fiftyFifty ? "You Win!" : 'You Lose'}
//             </h1>
//         )
//     }
// }

// export default Results

import React from 'react'

const Results = (props) => {
    return (
        <div>
            <h1 style={{ color: 'red' }}>
                {props.fiftyFifty ? "Kamu Menang!" : "Kamu Kalah"}
            </h1>
        </div>
    )
}

export default Results
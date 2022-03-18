// import React, { Component } from 'react'

// export class Information extends Component {

//     render() {
//         const { isInformation, showInformation } = this.props
//         return (
//             <div>
//                 <p>Ini Information</p>
//                 {
//                     isInformation ?
//                         <h1>Hari minggu Libur</h1>
//                         : null
//                 }

//                 <button onClick={() => showInformation()}>showInforation</button>
//             </div>
//         )
//     }
// }

// export default Information

import React from 'react'

const Information = ({ isInformation, showInformation }) => {
    return (
        <div>
            <p>This is Information</p>
            {
                isInformation ?
                    <h2>Hari Minggu Libur</h2>
                    : null
            }

            <button onClick={() => showInformation()}>Show Information</button>
        </div>
    )
}

export default Information

// // StateFull Component // StateFull Component atau Class Component
// import React, { Component } from 'react'

// class Logout extends Component {
//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.clickFunc}>Logout</button>
//             </div>
//         )
//     }
// }

// export default Logout


// Functional Component atau JSX
import React from 'react'

const Logout = (props) => {
    return (
        <div>
            <button onClick={props.clickFunc}>Logout</button>
        </div>
    )
}

export default Logout
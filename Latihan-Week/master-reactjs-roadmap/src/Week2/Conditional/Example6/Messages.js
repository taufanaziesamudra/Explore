// // StateFull Component // StateFull Component atau Class Component

// import React, { Component } from 'react'

// class Messages extends Component {
//     render() {
//         if (this.props.isLoggedIn) {
//             return <h1>Welcome User</h1>
//         } else {
//             return <h1>Please Login</h1>
//         }
//     }
// }

// export default Messages


// Functional Component atau JSX
import React from 'react'

const Messages = (props) => {
    if (props.isLoggedIn) {
        return <h1>Welcome User</h1>
    } else {
        return <h1>Please Login</h1>
    }
}

export default Messages
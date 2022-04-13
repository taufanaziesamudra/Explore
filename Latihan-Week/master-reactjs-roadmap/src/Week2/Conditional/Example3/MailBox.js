// // StateFull Component // StateFull Component atau Class Component
// import React, { Component } from 'react'

// class MailBox extends Component {
//     render() {
//         const unreadMessages = this.props.unreadMessages
//         return (
//             <div>
//                 <h1>Haloooo</h1>
//                 {
//                     unreadMessages.length > 0 &&
//                     <h2>You Have {unreadMessages.length} unreadMessages.</h2>
//                 }
//             </div>
//         )
//     }
// }

// export default MailBox



// Functional Component atau JSX
import React from 'react'

const MailBox = (props) => {
    // Condional Logical && Operator
    const unreadMessages = props.unreadMessages
    return (
        <div>
            <h1>Haloooo</h1>
            {
                unreadMessages.length > 0 &&
                <h2>You Have {unreadMessages.length} unread messages.
                </h2>
            }
        </div>
    )
}

export default MailBox
// // StateFull Component // StateFull Component atau Class Component
// import React, { Component } from 'react'
// import Login from './Login'
// import Logout from './Logout'
// import Messages from './Messages'

// class HomePage extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             isLoggedIn: false
//         }
//         this.ifLoginClicked = this.ifLoginClicked.bind(this)
//         this.ifLogoutClicked = this.ifLogoutClicked.bind(this)
//     }

//     ifLoginClicked() {
//         this.setState({
//             isLoggedIn: true
//         })
//     }

//     ifLogoutClicked() {
//         this.setState({
//             isLoggedIn: false
//         })
//     }
//     render() {
//         return (
//             <div>
//                 <Messages isLoggedIn={this.state.isLoggedIn} />
//                 {
//                     (this.state.isLoggedIn) ? (
//                         <Logout clickFunc={this.ifLogoutClicked} />
//                     ) : (
//                         <Login clickFunc={this.ifLoginClicked} />
//                     )
//                 }
//             </div>
//         )
//     }
// }

// export default HomePage


// Functional Component atau JSX
import React, { useState } from 'react'
import Login from './Login'
import Logout from './Logout'
import Messages from './Messages'

const HomePage = () => {
    const [state, setState] = useState({
        isLoggedIn: false
    })

    const ifLoginClicked = () => {
        setState({
            isLoggedIn: true
        })
    }

    const ifLogoutClicked = () => {
        setState({
            isLoggedIn: false
        })
    }
    return (
        <div>
            <Messages isLoggedIn={state.isLoggedIn} />
            {
                (state.isLoggedIn) ? (
                    <Logout clickFunc={ifLogoutClicked} />
                ) : (
                    <Login clickFunc={ifLoginClicked} />
                )
            }
        </div>
    )
}

export default HomePage
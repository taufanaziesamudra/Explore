// // StateFull Component // StateFull Component atau Class Component
// import React, { Component } from 'react'
// import LoginButton from './LoginButton'
// import LogoutButton from './LogoutButton'
// import Greeting from './Greeting'

// export class LoginControl extends Component {
//     constructor(props) {
//         super(props)
//         this.handleLoginClick = this.handleLoginClick.bind(this)
//         this.handleLogoutClick = this.handleLogoutClick.bind(this)
//         this.state = {
//             isLoggedIn: false
//         }
//     }

//     handleLoginClick() {
//         this.setState({
//             isLoggedIn: true
//         })
//     }

//     handleLogoutClick() {
//         this.setState({
//             isLoggedIn: false
//         })
//     }
//     render() {
//         // const isLoggedIn = this.state.isLoggedIn
//         let button
//         // Jika user menekan tombol Logout maka akan akan kelogout maka user akan kelogin
//         if (this.state.isLoggedIn) {
//             button = <LogoutButton onClick={this.handleLogoutClick} />
//         } else {
//             button = <LoginButton onClick={this.handleLoginClick} />
//         }
//         return (
//             <div>
//                 <Greeting isLoggedIn={this.state.isLoggedIn} />
//                 {button}
//             </div>
//         )
//     }
// }

// export default LoginControl


// Functional Component atau JSX
import React, { useState } from 'react'
import Greeting from './Greeting'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'

const LoginControl = () => {
    const [state, setState] = useState({
        isLoggedIn: false,
    })

    const handleLogin = () => {
        setState({
            isLoggedIn: true
        })
    }

    const handleLogout = () => {
        setState({
            isLoggedIn: false
        })
    }

    let button
    if (state.isLoggedIn) {
        button = <LogoutButton onClick={handleLogout} />
    } else {
        button = <LoginButton onClick={handleLogin} />
    }
    return (
        <div>
            <Greeting isLoggedIn={state.isLoggedIn} />
            {button}
        </div>
    )
}

export default LoginControl

// import React, { Component } from 'react'
// import Greeting from '../Conditional Rendering/Greeting'
// import Login from './Login'
// import Logut from './Logut'

// export class LoginControl extends Component {
//     constructor(props) {
//         super(props)
//         this.handleLogin = this.handleLogin.bind(this)
//         this.handleLogout = this.handleLogout.bind(this)
//         this.state = {
//             isLoggedIn: false
//         }
//     }

//     handleLogin = () => {
//         this.setState({
//             isLoggedIn: true
//         })
//     }

//     handleLogout = () => {
//         this.setState({
//             isLoggedIn: false
//         })
//     }
//     render() {
//         const isLoggedIn = this.state.isLoggedIn
//         let button
//         if (isLoggedIn) {
//             button = <Logut onClick={this.handleLogout} />
//         } else {
//             button = <Login onClick={this.handleLogin} />
//         }
//         return (
//             <div>
//                 <Greeting isLoggedIn={isLoggedIn} />
//                 {button}
//             </div>
//         )
//     }
// }

// export default LoginControl


// import { render } from '@testing-library/react'
// import React, { useState } from 'react'
// import Logut from './Logut'
// import Login from '/.Login'
// import Greeting from '../Conditional Rendering/Greeting'

// const LoginControl = () => {
//     const [state, setState] = useState({
//         isLoggedIn: false
//     })

//     const handleLogin = () => {
//         setState({
//             isLoggedIn: true
//         })
//     }

//     const handleLogout = () => {
//         setState({
//             isLoggedIn: false
//         })
//     }
//     render()
//     let button
//     if (isLoggedIn) {
//         button = <Logut onClick={handleLogout} />
//     } else {
//         button = <Login onClick={handleLogin} />
//     }

//     return (
//         <div>
//             <Greeting isLoggedIn={isLoggedIn} />
//         </div>
//     )
// }

// export default LoginControl
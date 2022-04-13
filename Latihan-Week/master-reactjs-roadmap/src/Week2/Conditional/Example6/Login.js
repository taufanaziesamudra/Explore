// // StateFull Component // StateFull Component atau Class Component
// import React, { Component } from 'react'

// class Login extends Component {
//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.clickFunc}>Login</button>
//             </div>
//         )
//     }
// }

// export default Login


// Functional Component atau JSX
import React from 'react'

const Login = (props) => {
    return (
        <div>
            <button onClick={props.clickFunc}>Login</button>
        </div>
    )
}

export default Login
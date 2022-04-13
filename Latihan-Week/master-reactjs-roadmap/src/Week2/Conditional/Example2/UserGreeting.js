import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }
    render() {
        // Operator Logika
        return this.state.isLoggedIn && <div>Welcome Taufan</div>


        // // Conditional Ternary Operator
        // return this.state.isLoggedIn ? (
        //     <div>Welcome Taufan</div>
        // ) : (
        //     <div>Welcome User</div>
        // )

        // let message
        // if (this.state.isLoggedIn) {
        //     message = <div>Welcome Taufan</div>
        // } else {
        //     message = <div>Welcome User</div>
        // }
        // return <div>{message}</div>

        // // Conditional Operator if/else
        // if (this.state.isLoggedIn) {
        //     return <div>Welcome Taufan</div>
        // } else {
        //     return <div>Welcome User</div>
        // }
        // return (
        //     <div>
        //         <div>Welcome Taufan</div>
        //         <div>Welcome User</div>
        //     </div>
        // )
    }
}

export default UserGreeting
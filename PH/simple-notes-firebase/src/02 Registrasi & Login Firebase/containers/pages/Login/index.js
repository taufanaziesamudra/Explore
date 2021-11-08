import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Login extends Component {
    render() {
        return (
            <div>
                <p>Login Page {this.props.popupProps}</p>
                <button>Go to Register</button>
                <button>Go to Dashboard</button>
            </div>
        )
    }
}

// mapStateToProps 
const reduxState = (state) => ({
    popupProps: state.popup
})


export default connect(reduxState, null)(Login)

import React, { Component } from 'react'
import './Register.scss'
import 'firebase/auth'
import firebaseConfig from '../../../config/firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
export class Register extends Component {
    state = {
        email: "",
        password: ""
    }

    // Method untuk memasukan email dan password
    handleChangetext = (e) => {
        // console.log(e.targer.id)
        this.setState({
            // e.target untuk menginput email dan password
            [e.target.id]: e.target.value
        })
    }

    // Method untuk mensubmit register
    handleRegisterSubmit = () => {
        const { email, password } = this.state
        console.log('data before send:', email, password)

        createUserWithEmailAndPassword(email, password)
            .then((res) => {
                console.log("succes:", res)
            })
            .catch(function (error) {
                var errorCode = error.code
                var errorMessage = error.message
            })
    }
    render() {
        return (
            <div className="auth-container">
                <div className="auth-card">
                    <p className="auth-title">Register Page</p>
                    <input className="input"
                        placeholder="Email"
                        type="text"
                        id="email"
                        onChange={this.handleChangetext} />
                    <input className="input"
                        placeholder="Password"
                        type="password" id="password"
                        onChange={this.handleChangetext} />
                    <button onClick={this.handleRegisterSubmit} className="btn">Register</button>
                </div>

                {/* <button>Go to Dashboard</button> */}
            </div>
        )
    }
}

export default Register

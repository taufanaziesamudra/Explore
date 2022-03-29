import React, { Component } from 'react'

export class Conditional2 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userAge: '',
            input: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.submit = this.submit.bind(this)
    }

    handleChange(event) {
        this.setState({
            input: event.target.value,
            userAge: ''
        })
    }

    submit() {
        this.setState(state => ({
            userAge: state.input
        }))
    }
    render() {
        const inputStyle = {
            width: 235,
            margin: 5
        }

        const buttonOne = <button onClick={this.submit}>Submit</button>
        const buttonTwo = <button>Umur Sudah cukup</button>
        const buttonThree = <button>Umur Belum cukup</button>
        return (
            <div>
                <h2>Masukan umurmu</h2>
                <input style={inputStyle}
                    type='number'
                    value={this.state.input}
                    onChange={this.handleChange}></input>
                <br />
                {
                    this.state.userAge === ''
                        ? buttonOne : this.state.userAge >= 18 ? buttonTwo : buttonThree}
            </div>
        )
    }
}

export default Conditional2

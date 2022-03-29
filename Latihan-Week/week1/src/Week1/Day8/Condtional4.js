import React, { Component } from 'react'

export class Condtional4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
            input: event.target.value
        })
    }
    render() {
        const inputStyle = {
            border: '1px solid black'
        }
        if (this.state.input.length > 15) {
            inputStyle.border = '3px solid red'
        }
        return (
            <div>
                <h3>Jangan telalu banyak mengetik</h3>
                <input type='text'
                    style={inputStyle}
                    value={this.state.value}
                    onChange={this.handleChange}></input>
            </div>
        )
    }
}

export default Condtional4
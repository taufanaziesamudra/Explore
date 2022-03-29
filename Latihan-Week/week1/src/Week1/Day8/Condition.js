import React, { Component } from 'react'

export class Condition extends Component {
    constructor(props) {
        super(props)

        this.state = {
            display: true
        }
        this.handleToggle = this.handleToggle.bind(this)
    }

    handleToggle() {
        this.setState(state => ({
            display: !state.display
        }))
    }

    render() {
        return (
            <div>
                <button onClick={this.handleToggle}>Toogle Display</button>
                {this.state.display && <h1>Buka</h1>}
            </div>
        )
    }
}

export default Condition

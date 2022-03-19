import React, { Component } from 'react'
import MyComponent2 from './MyComponent2'

export class Controller extends Component {
    constructor(props) {
        super(props)

        this.state = {
            value: 0
        }
        this.addValue = this.addValue.bind(this)
    }

    addValue() {
        this.setState(state => ({
            value: state.value + 1
        }))
    }
    render() {
        return (
            <div>
                <button onClick={this.addValue}>Add</button>
                <MyComponent2 value={this.state.value} />
            </div>
        )
    }
}

export default Controller
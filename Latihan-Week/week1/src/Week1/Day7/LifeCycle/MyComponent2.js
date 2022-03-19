import React, { Component } from 'react'

export class MyComponent2 extends Component {
    constructor(props) {
        super(props)
    }
    shouldComponentUpdate(nextprops, nextState) {
        console.log('Mau di perbarui?')
        if (nextprops.value % 2 == 0) {
            return true
        }
        return false
    }

    componentDidUpdate() {
        console.log('Component di render.')
    }
    render() {
        return (
            <div>
                <h1>{this.props.value}</h1>
            </div>
        )
    }
}

export default MyComponent2

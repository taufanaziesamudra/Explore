import React, { Component } from 'react'
import { GLobalConsumer } from '../../../../context/context'

export class Counter extends Component {
    render() {
        return (
            <div className="counter">
                <button className="minus" onClick={() => this.props.dispatch({ type: "MINUS_ORDER" })}>-</button>
                <input className="type" value={this.props.state.totalOrder}></input>
                <button className="plus" onClick={() => this.props.dispatch({ type: "PLUS_ORDER" })}>+</button>
            </div>
        )
    }
}

export default GLobalConsumer(Counter)

import React, { Component } from 'react'
import { RootContext } from '../../../Home/Home'

export class Counter extends Component {
    render() {
        return (
            <RootContext.Consumer>
                {
                    value => {
                        return (
                            <div className="counter">
                                <button className="minus" onClick={() => value.dispatch({ type: "MINUS_ORDER" })}>-</button>
                                <input className="type" value={value.state.totalOrder}></input>
                                <button className="plus" onClick={() => value.dispatch({ type: "PLUS_ORDER" })}>+</button>
                            </div>
                        )
                    }
                }
            </RootContext.Consumer>
        )
    }
}

export default Counter

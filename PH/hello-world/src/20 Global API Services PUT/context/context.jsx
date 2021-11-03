import React, { Component, createContext } from 'react'

//Provider
const RootContext = createContext()
const Provider = RootContext.Provider

const GlobalProvider = (Children) => {
    return (
        class ParentComp extends Component {
            state = {
                totalOrder: 5
            }

            // Menerima sebuah parameter action
            dispatch = (action) => {
                if (action.type === "PLUS_ORDER") {
                    return this.setState({
                        totalOrder: this.state.totalOrder + 1
                    })
                }
                if (action.type === "MINUS_ORDER") {
                    if (this.state.totalOrder > 0) {
                        return this.setState({
                            totalOrder: this.state.totalOrder - 1
                        })
                    }

                }
            }
            render() {
                return (
                    <Provider value={
                        {
                            state: this.state,
                            dispatch: this.dispatch
                        }
                    }>
                        <Children {...this.props} />
                    </Provider>
                )
            }
        }
    )
}

export default GlobalProvider

// Consumer
const Consumer = RootContext.Consumer
export const GLobalConsumer = (Children) => {
    return (
        class ParentConsumer extends Component {
            render() {
                return (
                    <Consumer>
                        {
                            value => {
                                return (
                                    <Children {...this.props} {...value} ></Children>
                                )
                            }
                        }
                    </Consumer>
                )
            }
        }
    )
}
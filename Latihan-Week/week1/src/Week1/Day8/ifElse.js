import React, { Component } from 'react'

export class Styling3 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            dispaly: true,
        }
        this.toggleDisplay = this.toggleDisplay.bind(this)
    }
    toggleDisplay() {
        this.setState((state) => ({
            dispaly: !state.dispaly
        }))
    }
    render() {
        if (this.state.dispaly) {
            return (
                <div>
                    <button onClick={this.toggleDisplay}>Toggle Aktif</button>
                    <h1>Displayed!</h1>
                </div>
            )
        } else {
            return (
                <div>
                    <button onClick={this.toggleDisplay}>Toggle tidak aktif</button>
                </div>
            );
        }
    }
}

export default Styling3
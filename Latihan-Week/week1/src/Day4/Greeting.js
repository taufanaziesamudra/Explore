import React, { Component } from 'react'

export class Greeting extends Component {
    state = {
        Halo: 'Haloo semua',
    }
    render() {
        return (
            <div>
                <h2>props: {this.props.kirim}</h2>
                <hr />

                <h3>State functionanal {this.state.Halo}</h3>
                <button onClick={() => this.setState({ Halo: 'Berubah' })}>Ganti</button>
            </div>
        )
    }
}

export default Greeting
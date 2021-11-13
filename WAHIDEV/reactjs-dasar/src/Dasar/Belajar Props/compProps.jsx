import React, { Component } from 'react'

export class Operan extends Component {
    render() {
        // const { handleChange } = this.props
        return (
            <div>
                {/* Menerima props */}
                <h2>Operan state yang menjadi props : {this.props.makanan}</h2>
                {/* Menerima props berupa function */}
                <button onClick={() => this.props.handleChange('soto')}>Ganti</button>
            </div>
        )
    }
}

export default Operan

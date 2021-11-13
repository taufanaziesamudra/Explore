import React, { Component } from 'react'
import Operan from './compProps'

export class StateProps extends Component {
    constructor(props) {
        super(props)
        this.state = {
            makanan: 'Bakso'
        }
    }

    // Function untuk merubah makanan
    // New_eat adalah sebuah value
    handleChange = (new_eat) => {
        this.setState({
            makanan: new_eat
        })
    }
    render() {
        return (
            <div>
                {/* Menerima props dari state makanan */}
                <h1>{this.state.makanan}</h1>
                {/* Menerima handleChange untuk merubah bakso menjadi soto dan menrima sebuah value */}
                <button onClick={() => this.handleChange('soto')}>button</button>
                {/* Mengirim props ke Operan */}
                <Operan
                    makanan={this.state.makanan}
                    handleChange={this.handleChange} />

            </div>
        )
    }
}

export default StateProps

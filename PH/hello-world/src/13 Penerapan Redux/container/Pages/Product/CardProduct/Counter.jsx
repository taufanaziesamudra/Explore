import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Counter extends Component {
    render() {
        // Untuk mengecek redux
        console.log(this.props)
        return (
            <div className="counter">
                {/* Menerima Method dari handleMinus */}
                {/* Menggunakan redux */}
                <button onClick={this.props.hanldeMinus} className="minus">-</button>

                {/* Menerima value dari order */}
                {/* Menggunakan redux */}
                <input className="type" value={this.props.order}></input>

                {/* Menerima Method dari handlePlus */}
                {/* Menggunakan redux */}
                <button onClick={this.props.handlePlus} className="plus">+</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        order: state.totalOrder
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handlePlus: () => dispatch({ type: "PLUS_ORDER" }),
        hanldeMinus: () => dispatch({ type: "MINUS_ORDER" })
    }
}


// mapStateToProps untuk memanggil params global
// state atau store
// reducer atau dispatch
export default connect(mapStateToProps, mapDispatchToProps)(Counter)
